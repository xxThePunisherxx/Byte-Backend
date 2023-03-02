const nodemailer = require("nodemailer");
const { host, mail, password, smtpPort } = require("../config/config");

let transporterInfo = {
  host,
  port: smtpPort,
  secure: false,
  auth: {
    user: mail,
    pass: password,
  },
};

let sendMail = async (mailInfo) => {
  try {
    let transporter = nodemailer.createTransport(transporterInfo);
    await transporter.sendMail(mailInfo);
  } catch (error) {
    console.log("error has occurred", error.message);
  }
};

module.exports = sendMail;
