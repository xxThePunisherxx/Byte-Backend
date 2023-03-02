const port = process.env.PORT;
const service = process.env.SMTP_SERVICE;
const mail = process.env.SMTP_MAIL;
const password = process.env.SMTP_PASSWORD;
const host = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT;

module.exports = {
  port,
  service,
  mail,
  password,
  host,
  smtpPort,
};
