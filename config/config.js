const port = process.env.PORT;
const service = process.env.SMPT_SERVICE;
const mail = process.env.SMPT_MAIL;
const password = process.env.SMPT_PASSWORD;
const host = process.env.SMPT_HOST;

module.exports = {
  port,
  service,
  mail,
  password,
  host,
};
