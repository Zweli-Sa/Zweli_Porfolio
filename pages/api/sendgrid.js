import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
     console.log('REQ.BODY', req.body);
    await sendgrid.send({
      to: 'zwelisangweni1@gmail.com', // Your email where you'll receive emails
      from: 'zwelisangweni25@gmail.com', // your website email address here
      subject: `email from: ${req.body.name}`,
      text: `🙋/🙋‍♂️Name: ${req.body.name}\n ✉️Email: ${req.body.email}\n 📝Message: ${req.body.message}`
      ,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
  return res.status(200).json({ error: '' });
}

export default sendEmail;
