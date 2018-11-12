'use strict';
  
//const Pedido = require('/home/ubuntu/workspace/gerenciarPedidos/pedidos');
const Mailer = require('/home/ubuntu/workspace/gerenciarPedidos/mailers');

//pedido está mockado
//const quantidade = 2;
const nome = "Adolf";
//const email = "lipeflorentino2@gmail.com";

//let pedidos = new Pedido(email, quantidade, nome);
let mails = new Mailer();

module.exports.registrarPedido = async(event, context, callback) => {
  //pedidos.save(email, quantidade, nome, callback);
  await mails.enviarEmail();

  return {
    statusCode: 200,
    
    body: JSON.stringify({
      message: nome + ', seu pedido foi registrado com sucesso!',
      input: event, 
      
    }),
    
  };  
  
  

};
