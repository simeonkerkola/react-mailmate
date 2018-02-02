const sendgrid = require('sendgrid');

const helper = sendgrid.mail;

class Mailer extends helper.Mail {}
