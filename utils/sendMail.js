// to send email form server first you have to =>allow less secure app on
//to enable less secure app
//use 2-step verification and generate app password
//insted of using your password use app password of google
//for this go to the => manage your account => security setting and=>enable 2-step verifiction =>crete app pssword (select other option)

const nodemailer = require("nodemailer");

// the main thing in this file is trasporterInfo and mailInfo
//neglet other part
//transporterInof gives form info while mailInof gives to info
let transporterInfo = {
  host: process.env.SMPT_HOST,
  // if from is gmail use gmail smtp
  port: process.env.SMPT_PORT,
  secure: false,
  //   auth user and pass play the role from
  auth: {
    // note user and pass most be genuine
    //it is the email through which email is send
    user: process.env.SMPT_MAIL,
    pass: process.env.SMPT_PASSWORD,
    //insted of using your password use app password of google
    //for this go to the => manage your account => security setting and=>enable 2-step verifiction =>crete app pssword (select other option)
  },
};

let sendMail = async (mailInfo) => {
  // let mailInfo =
  // {
  //   from:'"Fred Foo" <nitanthapa425@gmail.com>'
  //   to: ["nitanthapa123@gmail.com", "sandeshbca5@arunima.edu.np"],
  //   subject: "this is subject",
  //   html: "<h1>Hello World<h1>",
  // };

  // note from : is only  use to show the from information (ie not used to point the sender email sender email is point to the auth part)
  //it is good to put nitanthapa425@gmail.com
  try {
    let transporter = nodemailer.createTransport(transporterInfo); //transporter gives from information
    let info = await transporter.sendMail(mailInfo); //it gives to aaa
    // console.log(info.messageId);
  } catch (error) {
    console.log("error has occurred", error.message);
  }
};

//to sendMail just call sendMail( {
//   from:'"Fred Foo" <nitanthapa425@gmail.com>'
//   to: ["nitanthapa123@gmail.com", "sandeshbca5@arunima.edu.np"],
//   subject: "this is subject",
//   html: "<h1>Hello World<h1>",
// };)

module.exports = sendMail;
