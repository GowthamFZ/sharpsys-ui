import nodemailer from 'nodemailer';
const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;

export async function POST(request) {
  try {
    // Parse the incoming request (from the client-side)
    const { name, email, subject, message, attachments } = await request.json();
    
    console.log("Attachments::::"+email);
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
    if(attachments) {
    const mailOptions = {
      from: SMTP_SERVER_USERNAME, // Sender's email address
      to: SITE_MAIL_RECIEVER,                   // Recipient's email address
      subject: subject,            // Subject of the email
      text: message,              // Email content (plain text)
      attachments : [ {
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
      from: email, // Sender's email address
      to: SITE_MAIL_RECIEVER,                   // Recipient's email address
      subject: subject,            // Subject of the email
      text: message,              // Email content (plain text)
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
