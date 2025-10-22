// const nodemailer = require("nodemailer");
// require("dotenv").config();

// //const asyncHandler = require("express-async-handler");
// const sendEmail = async (options) => {
//   const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     service: process.env.SERVICE,
//     port: 587,
//     secure: false,
//     auth: {
//       user: process.env.MAIL_ID,
//       pass: process.env.MAIL_PASSWORD,
//     },
//     tls: {
//       rejectUnauthorized: false,
//     },
//   });

//   // async..await is not allowed in global scope, must use a wrapper
//   async function main() {
//     // send mail with defined transport object
//     const info = await transporter.sendMail({
//       from:"",
//       to: options.email,
//       subject: options.subject,
//       html: options.html,
//     });

//     console.log("Message sent: %s", info.messageId);
//     // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
//   }
//   main().catch(console.error);
// };


// module.exports = { sendEmail };

const { Resend } = require("resend");
require("dotenv").config();

const resend = new Resend(process.env.RESEND_API_KEY);

exports.sendEmail = async ({ email, subject, html }) => {
  try {
    await resend.emails.send({
      from: "Groceria Stores <onboarding@resend.dev>",  // Or your verified sender
      to: email,
      subject,
      html,
    });
    console.log(`📧 Email sent to ${email} via Resend`);
  } catch (err) {
    console.error("❌ Email send failed:", err);
    throw err;
  }
};
  
