class Mailers{
    constructor(m) {
    this.mailer = m;
  }
  //dados de email está mockado
  enviarEmail() {
        // Use at least Nodemailer v4.1.0
        const nodemailer = require('nodemailer');
        
        console.log('Credentials obtained, sending message...');
    
        // Create a SMTP transporter object
        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'lipeflorentino2@gmail.com', 
                pass: 'condor1010'
            }, 
            tls: { rejectUnauthorized: false }
            
        });
        console.log('transporter criado!');
        
        // Message object
        let message = {
            from: 'lipeflorentino2@gmail.com',
            to: 'filipeflorentino@id.uff.br',
            subject: 'Nodemailer is unicode friendly ✔',
            text: 'Hello to myself!',
            html: '<p><b>Hello</b> to myself!</p>'
        };
        console.log('mensagem criada!');
        console.log(message);
    
        transporter.sendMail(message, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email enviado: ' + info.response);
          }
        });
        
  }    

}

module.exports = Mailers;