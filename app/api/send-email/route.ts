import nodemailer from 'nodemailer';
const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECIEVER_CONTACT = process.env.SITE_MAIL_RECIEVER_CONTACT;
const SITE_MAIL_RECIEVER_HR = process.env.SITE_MAIL_RECIEVER_HR;

function isEmail(value: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
}

export async function POST(request) {
  try {
    // Parse the incoming request (from the client-side)
    const { name, email, subject, message, attachments } = await request.json();
    const receipientAddress = isEmail(name) ? email : SITE_MAIL_RECIEVER_CONTACT
    const bccList = isEmail(name) ? SITE_MAIL_RECIEVER_CONTACT : undefined

    // Create a transporter object using your email service
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: SMTP_SERVER_HOST,
      port: 587,
      secure: true,
      auth: {
        user: SMTP_SERVER_USERNAME,
        pass: SMTP_SERVER_PASSWORD,
      },
    });

    // Set up email data
    if (attachments) {
      const mailOptions = {
        from: SMTP_SERVER_USERNAME, // Sender's email address
        to: SITE_MAIL_RECIEVER_HR,                   // Recipient's email address
        subject: subject,            // Subject of the email
        html: message,              // Email content (HTML Content)
        attachments: [{
          filename: attachments.filename,
          content: attachments.content, // should be base64-encoded
          encoding: 'base64',
        },
        ],
      };
      // Send the email
      await transporter.sendMail(mailOptions);
    } else {
      const mailOptions = {
        from: SMTP_SERVER_USERNAME, // Sender's email address
        to: receipientAddress,      // Recipient's email address
        bcc: bccList,
        subject: subject,            // Subject of the email
        html: message,              // Email content (HTML content)
      };
      // Send the email
      await transporter.sendMail(mailOptions);
    }



    return new Response('Email sent successfully', { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response('Failed to send email', { status: 500 });
  }
}
