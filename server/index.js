import { join } from 'path';
import express, { json } from 'express';
import { sendMail } from './config';
import { config } from 'dotenv';
config();
const app = express();

const buildPath = join(__dirname, '..', 'build');
app.use(json());
app.use(buildPath);

app.post('/send', (req, res) => {
  try {
    const mailOptions = {
      from: req.body.email, // sender address
      to: process.env.email, // list of receivers
      subject: req.body.subject, // Subject line
      html: `
      <p>You have a new contact request.</p>
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Subject: ${req.body.subject}</li>
        <li>Message: ${req.body.message}</li>
      </ul>
      `
    };

    sendMail(mailOptions, function (err, info) {
      if (err) {
        res.status(500).send({
          success: false,
          message: 'There was a problem completing your request. Please try again later'
        });
      } else {
        res.send({
          success: true,
          message: 'Thanks for contacting me. I will get back to you shortly'
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'There was a problem completing your request. Please try again later'
    });
  }
});

app.listen(3030, () => {
    console.log('server start on port 3030');
  });