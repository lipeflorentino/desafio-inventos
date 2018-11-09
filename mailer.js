class Mailer{
    constructor(mailer) {
    this.mailer = mailer;
  }
  //dados de email está mockado
  enviarEmail() {
       const nodemailer = this.mailer;
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        nodemailer.createTestAccount((err, account) => {
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: 'smtp.ethereal.email',
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: 'ojlqr266holtndcd@ethereal.email',
                    pass: 'uRVaAj6hTycaaHa7Mu'
                }
            });
        
            // setup email data with unicode symbols
            let mailOptions = {
                from: '"Fred Foo 👻" <foo@example.com>', // sender address
                to: 'lipeflorentino2@gmail.com', // list of receivers
                subject: 'Teste email ✔', // Subject line
                text: 'Testando o envio de email', // plain text body
                html: '<b>Hello!!!</b>' // html body
            };
        
            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('email enviado!');
                console.log('Message sent: %s', info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        
            });
        });
  }    

}

module.exports = Mailer;