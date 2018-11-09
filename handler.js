'use strict';
  
//const nodemailer = require('nodemailer');
//const Pedido = require('/home/ubuntu/workspace/gerenciarPedidos/pedidos');
//const Mailer = require('/home/ubuntu/workspace/gerenciarPedidos/mailers');

//pedido está mockado
const quantidade = 2;
const nome = "Adolf";
const email = "lipeflorentino2@gmail.com";

//let pedidos = new Pedido(email, quantidade, nome);
//let mails = new Mailer(nodemailer);

module.exports.registrarPedido = async (event, context, callback) => {
  //pedidos.save(email, quantidade, nome, callback);
  //mails.enviarEmail();
  
  var nodemailer = require('nodemailer');

  console.log('Credenciais obtidas, preparando para enviar...');
  // O primeiro passo é configurar um transporte para este
  // e-mail, precisamos dizer qual servidor será o encarregado
  // por enviá-lo:
  var transporte = nodemailer.createTransport({
    service: 'Gmail', // Como mencionei, vamos usar o Gmail
    auth: {
      user: 'lipeflorentino2@gmail.com', // Basta dizer qual o nosso usuário
      pass: 'condor1010'             // e a senha da nossa conta
    } 
  });
  console.log('transporter criado!');
  // Após configurar o transporte chegou a hora de criar um e-mail
  // para enviarmos, para isso basta criar um objeto com algumas configurações
  var email = {
    from: 'lipeflorentino2@gmail.com', // Quem enviou este e-mail
    to: 'filipeflorentino@id.uff.br, lipeflorentino@yahoo.com', // Quem receberá
    subject: 'Node.js ♥ unicode',  // Um assunto bacana :-) 
    html: 'E-mail foi enviado do <strong>Node.js</strong>' // O conteúdo do e-mail
  };
  
  console.log('email criado!');
  
  // Pronto, tudo em mãos, basta informar para o transporte
  // que desejamos enviar este e-mail
  
  transporte.sendMail(email, function(err, info){
    if(err)
      throw err; // Oops, algo de errado aconteceu.
    else
      console.log('Email enviado! Leia as informações adicionais: ', info);
  });
  
  return {
    statusCode: 200,
    
    body: JSON.stringify({
      message: nome + ', seu pedido foi registrado com sucesso!',
      input: event, 
    }),
  };  
  
  

};
