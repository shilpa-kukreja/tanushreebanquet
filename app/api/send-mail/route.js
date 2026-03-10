import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    const { name, email, phone, eventType, guests, date, message } = data;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "tanushreegrandbanquets@gmail.com",
      subject: "New Banquet / Contact Inquiry",
      html: `
        <h2>New Inquiry</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Event Type:</b> ${eventType}</p>

        ${guests ? `<p><b>Guests:</b> ${guests}</p>` : ""}
        ${date ? `<p><b>Date:</b> ${date}</p>` : ""}

        <p><b>Message:</b> ${message}</p>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}