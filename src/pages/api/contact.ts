import nodemailer from 'nodemailer';

const email = process.env.MAILADRESS;
const emailPass = process.env.MAILPASS;

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: email,
    pass: emailPass
  },
  tls: {
    rejectUnauthorized: false
  }
});

const mailer = ({ senderMail, name, text }) => {
  console.log(email, emailpass);

  const from = `${name} <${senderMail}>`;
  const message = {
    from,
    to: `${email}`,
    subject: `Nova mensagem de contato -  ${name}`,
    text,
    replyTo: from
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
};

export default async (req, res) => {
  const { senderMail, name, content } = req.body;

  if (senderMail === '' || name === '' || content === '') {
    res.status(403).send('');
    return;
  }

  const mailerRes = await mailer({ senderMail, name, text: content });
  res.send(mailerRes);
};
