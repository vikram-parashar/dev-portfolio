export default function sendMail(name: string, email: string, message: string) {
  const nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "vikramparashar24@gmail.com",
      pass: "qisk nooo itlz gwrr",
    },
  });

  const mailOptions = {
    to: "vikramparashar24@gmail.com",
    subject: "Mail from dev-portfolio",
    text: `Name:${name}\nEmail:${email}\nMessage:${message}`
  };

  transporter.sendMail(mailOptions, (error:string, info:{response:string}) => {
    if (error) {
      console.error("Error sending email: ", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
}
