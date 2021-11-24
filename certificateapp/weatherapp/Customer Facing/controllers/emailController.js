const dotenv = require("dotenv");
dotenv.config();

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.sendContactQueryEmail = (req, res, next) => {
  const msg = {
    to: process.env.CONTACT_US_EMAIL,
    from: req.body.email,
    subject: "Query from Update24x7 contact us page",
    text: req.body.query,
  };
  sgMail
    .send(msg)
    .then(($sgmail) => {
      res.send({ errorMsg: null, successMsg: "Query successfully emailed" });
    })
    .catch((err) => {
      res.send({
        errorMsg: "somethingh went wrong (server Error)",
        successMsg: null,
      });
    });
};
