const nodemailer = require('nodemailer')
require("dotenv").config()

const transporter = nodemailer.createTransport({
    service:'hotmail',
    auth:{
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

module.exports = transporter;