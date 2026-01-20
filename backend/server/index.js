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
      "http://localhost:5173",              // local dev
      "https://your-project-name.web.app"   // firebase domain
    ],
  })
);

/* ===== Test Route ===== */
app.get("/", (req, res) => {
  res.send("Portfolio backend is running 🚀");
});

/* ===== Email Route ===== */
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Missing fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: "Message from Portfolio Contact Form",
      html: `
        <h3>New Portfolio Message</h3>
        <p>${message}</p>
        <hr/>
        <p><strong>Sender:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ success: false, message: "Email failed to send" });
  }
});

/* ===== Server Start ===== */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
