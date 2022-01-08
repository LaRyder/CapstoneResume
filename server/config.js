import { createTransport } from 'nodemailer';
import { config } from 'dotenv';
config();

var transporter = createTransport({
  service: 'gmail',
  auth: {
    user: process.env.email, // email address to send email from
    pass: process.env.password // gmail account password
  }
});

export default transporter