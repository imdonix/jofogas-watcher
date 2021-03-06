const nodemailer = require("nodemailer");

const settings = require('../settings')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: settings.AUTH
});

async function send(title, text, html)
{
    await transporter.sendMail({
    from: settings.AUTH.user,
    to: settings.USER,
    subject: title,
    text: text,
    html: html,
  });
}

module.exports = send