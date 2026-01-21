import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

/* ===== Middleware ===== */
app.use(express.json());

app.use(
  cors({
    origin: [
      "https://your-project-name.web.app", // Firebase frontend
    ],
  })
);

/* ===== SMTP Transport (Brevo) ===== */
const transporter = nodemailer.createTransport({
  host: process.env.BREVO_SMTP_HOST,
  port: process.env.BREVO_SMTP_PORT,
  secure: false, // true only for port 465
  auth: {
    user: process.env.BREVO_SMTP_USER,
    pass: process.env.BREVO_SMTP_PASS,
  },
});

/* ===== Test Route ===== */
app.get("/", (req, res) => {
  res.send("Portfolio backend 🚀");
});

/* ===== Email Route ===== */
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Missing fields",
    });
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.TO_EMAIL,
      replyTo: email,
      subject: "Website Portfolio Contact Me Message Form",
      html: `
        <h3>New Portfolio Message</h3>
        <p>${message}</p>
        <hr />
        <p><strong>Sender Name:</strong> ${name}</p>
        <p><strong>Sender Email:</strong> ${email}</p>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Brevo SMTP Error:", error);
    res.status(500).json({
      success: false,
      message: "Email failed to send",
    });
  }
});

/* ===== Server Start ===== */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
