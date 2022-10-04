//import sendgrid from '@sendgrid/mail';

//sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

//async function sendEmail(req, res) {
  //try {
  //   console.log('REQ.BODY', req.body);
  //  await sendgrid.send({
   //   to: 'zwelisangweni1@gmail.com', // Your email where you'll receive emails
    //  from: 'zwelisangweni25@gmail.com', // your website email address here
    //  subject: `email from: ${req.body.name}`,
     // text: `🙋/🙋‍♂️Name: ${req.body.name}\n ✉️Email: ${req.body.email}\n 📝Message: ${req.body.message}`,
     // html: '<strong>Hey there! It`s nice to meet you.</strong>',
    //});
  //} catch (error) {
   // return res.status(error.statusCode || 500).json({ error: error.message });
  //}
  //return res.status(200).json({ error: '' });
//}

//export default sendEmail;




// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
javascript
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: 'zwelisangweni1@gmail.com', // Change to your recipient
  from: 'zwelisangweni25@gmail.com', // Change to your verified sender
  subject: `email from: ${req.body.name}`,
  text: `🙋/🙋‍♂️Name: ${req.body.name}\n ✉️Email: ${req.body.email}\n 📝Message: ${req.body.message}`,
  html: '<strong>Hey there! It`s nice to meet you.</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })