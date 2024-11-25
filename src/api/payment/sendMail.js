require("dotenv").config();
const nodemailer = require("nodemailer");

const localEmail = process.env.EMAIL;
const password = process.env.EMAIL_Pass;

const sendMail = async (req, res, next) => {
  try {
    const { name, email, paymentIntentId } = await req.body;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: localEmail,
        pass: password,
      },
      debug: true,
    });

    const mailOptions = {
      from: localEmail,
      to: email,
      subject: `New Message From Happy Shopping about Your Payment`,
      text: `Hello Mr./Ms./Mss. ${name},your payment id : ${paymentIntentId}.Please contact us for any queries. Keep this id safe. Thank you.`,
    };

    await transporter.sendMail(mailOptions);
    res.status(201).send({ success: true });
  } catch (error) {
    next(error);
  }
};

module.exports = sendMail;
