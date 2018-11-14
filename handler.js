'use strict';
  
const Pedido = require('/home/ubuntu/workspace/gerenciarPedidos/pedidos');
const Mailer = require('/home/ubuntu/workspace/gerenciarPedidos/mailers');

//pedido está mockado
const email = "teste";
//passar um db
const db = null;

let pedidos = new Pedido(email);
let mails = new Mailer();

module.exports.registrarPedido = async(event, context, callback) => {
  //para salvar no bd
  pedidos.save(email, db);
  //enviar email
  await mails.enviarEmail();
  console.log(event);
  return {
    statusCode: 200,
     headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({
      message: email + ', seu pedido foi registrado com sucesso!',
      input: event, 
      
    }),
    
  };  
  
  

};
