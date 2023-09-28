const nodemailer = require("nodemailer");

const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

const invitationUser = (req, res) => {
  const { userEmail, htmlTemplate } = req.body;

  let config = {
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  };

  let transporter = nodemailer.createTransport(config);

  let message = {
    from: EMAIL,
    to: [userEmail],
    subject: htmlTemplate.subject,
    html: htmlTemplate.body,
  };

  transporter
    .sendMail(message)
    .then(() => {
      return res.status(201).json({
        msg: "Successfully",
      });
    })
    .catch(error => {
      return res.status(500).json({ error });
    });
};

module.exports = {
  invitationUser,
};
