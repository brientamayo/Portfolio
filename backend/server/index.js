import express from "express";
import nodemailer from "nodemailer";
import sgMail from "@sendgrid/mail";

import cors from "cors";
import dotenv from "dotenv";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
console.log(
  "SendGrid key loaded:",
  process.env.SENDGRID_API_KEY?.startsWith("SG."),
);
dotenv.config();

const app = express();

/* ===== Middleware ===== */
app.use(express.json());

app.use(
  cors({
    origin: [
      // "http://localhost:5173", // local dev
      "https://your-project-name.web.app", // firebase domain
    ],
  }),
);

/* ===== Test Route ===== */
app.get("/", (req, res) => {
  res.send("Portfolio backend is running 🚀");
});

/* ===== Email Route ===== */
app.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Missing fields" });
  }

  try {
    const toEmail = process.env.TO_EMAIL || "fallback@example.com";
    const verifiedEmail = process.env.VERIFIED_EMAIL || "fallback@example.com";

    await sgMail.send({
      to: toEmail,
      from: verifiedEmail,
      subject: "Message from Portfolio Contact Form",
      html: `
    <h3>New Portfolio Message</h3>
    <p>${message}</p>
    <hr/>
    <p><strong>Sender Name:</strong> ${name}</p>
    <p><strong>Sender Email:</strong> ${email}</p>
  `,
    });

    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("SendGrid error:", error.response?.body || error);
    res.status(500).json({ success: false, message: "Email failed to send" });
  }
});

/* ===== Server Start ===== */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
