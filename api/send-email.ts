import nodemailer from "nodemailer";
import { IncomingMessage, ServerResponse } from "http"; // Node.js types

export default async function handler(
  req: IncomingMessage & { body: any },
  res: ServerResponse
) {
  if (req.method !== "POST") {
    res.writeHead(405, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ success: false, error: "Method not allowed" }));
  }

  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !message) {
    res.writeHead(400, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ success: false, error: "Name, email, and message are required" }));
  }

  const html = `
    <h2>New Submission from Website</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject || "No subject"}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: subject || "New Submission",
      html,
      replyTo: email,
    });

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ success: true }));
  } catch (err: any) {
    console.error("Email error:", err);
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ success: false, error: "Server error. Check logs." }));
  }
}
