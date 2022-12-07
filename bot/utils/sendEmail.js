import nodemailer from "nodemailer";

const sendEmail = async (to, subject, message) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const options = {
    from: `"${process.env.EMAIL_SENDER}" <${process.env.EMAIL_FROM}>`,
    to,
    subject,
    html: message,
  };

  transporter.sendMail(options, (error, info) => {
    if (error) console.log(error);
    else console.log(info);
  });
};

export default sendEmail;
