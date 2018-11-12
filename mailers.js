class Mailers{
    constructor() {
    
  }
  //dados de email está mockado
  enviarEmail() {
        // Use at least Nodemailer v4.1.0
        const nodemailer = require('nodemailer');

        const xoauth2 = require('xoauth2');
        
        // Create a SMTP transporter object
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                xoauth2: xoauth2.createXOAuth2Generator({
                    user: 'lipeflorentino2@gmail.com', 
                    clientId: '233830467844-sh3mq10oenuv32i66h4tcrbmcjqo57ih.apps.googleusercontent.com',
                    clientSecret: 'iJa3f6rT4X_aGzLm9cCMY0HZ',
                    refreshoken: '1/AAStAgTmHmj169y5Dsbxg8pyzUpW7ZOTtJ3DWpE9OiA' 
                })
                
            }, 
            
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
        
        transporter.sendMail(message, function(error, info){
          if (error) {
            console.log(error);
          }else{
            console.log('Email enviado: ' + info.response);   
          }
           
        });
    
  }    

}

module.exports = Mailers;