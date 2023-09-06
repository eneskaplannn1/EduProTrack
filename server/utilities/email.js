const nodemailer = require("nodemailer");

class Email {
  constructor(user, url) {
    this.url = url;
    this.to = user.email;
    this.firstName = user.name.split(" ")[0];
    this.from = `Enes Kaplan <k88817029@gmail.com>`;
  }

  newTransPort() {
    return nodemailer.createTransport({
      host: "smtp.mailosaur.net",
      port: 587,
      auth: {
        user: process.env.MAILOSAUR_USER,
        pass: process.env.MAILOSAUR_PASS,
      },
    });
  }

  async send(template, subject) {
    const html = pug.renderFile(`${__dirname}/../views/email/${template}.pug`, {
      firstName: this.firstName,
      url: this.url,
      subject,
    });

    const mailOptions = {
      from: "Enes Kaplan <k88817029@gmail.com>",
      to: this.to,
      subject,
      text: htmlToText(html),
    };
    await this.newTransPort().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send("welcome", "Welcome to the EduProTrack family!");
  }

  async sendPasswordReset() {
    await this.send(
      "passwordReset",
      "Your password reset token (valid for only 10 minutes)"
    );
  }
  async sendPasswordReset() {
    await this.send("verifyAccount", "verify your account");
  }
}

module.exports = Email;
