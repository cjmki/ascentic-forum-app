import nodemailer from 'nodemailer';
import config from './config';

const mailer = nodemailer.createTransport({
  host: config.mailServer.host,
  port: config.mailServer.port,
  secure: config.mailServer.secure,
  auth: {
    user: config.mailServer.auth.user,
    pass: config.mailServer.auth.pass,
  },
});

export default mailer;
