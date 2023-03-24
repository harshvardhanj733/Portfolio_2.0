const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service:'hotmail',
    auth:{
        user: 'harshvardhanj733@outlook.com',
        pass: 'anuharsh723!'
    }
});

module.exports = transporter;