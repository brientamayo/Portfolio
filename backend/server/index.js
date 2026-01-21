import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.BREVO_API_KEY) {
  console.error("❌ BREVO_API_KEY is missing on startup");
}

const app = express();

/* ===== Middleware ===== */
app.use(express.json());

app.use(
  cors({
    origin: ["https://your-project-name.web.app"],
  })
);

/* ===== Test Route ===== */
app.get("/", (req, res) => {
  res.send("Portfolio backend running 🚀");
});

/* ===== Email Route (Brevo API) ===== */
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Missing fields",
    });
  }

  try {
    console.log("Brevo key prefix:", process.env.BREVO_API_KEY?.slice(0, 8));

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          email: process.env.BREVO_SENDER_EMAIL,
          name: "Portfolio Contact",
        },
        to: [{ email: process.env.TO_EMAIL }],
        replyTo: { email },
        subject: "Website Portfolio Contact Me Message Form",
        htmlContent: `
          <h3>New Portfolio Message</h3>
          <p>${message}</p>
          <hr />
          <p><strong>Sender Name:</strong> ${name}</p>
          <p><strong>Sender Email:</strong> ${email}</p>
        `,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Brevo API Error:", errorText);
      return res.status(500).json({
        success: false,
        message: "Email failed to send",
      });
    }

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

/* ===== Server Start ===== */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
