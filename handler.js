'use strict';
  
const nodemailer = require('nodemailer');
//const mailer = nodemailer;
const Pedido = require('pedidos');
//pedido está mockado
const quantidade = 2;
const nome = "Adolf";
const email = "lipeflorentino2@gmail.com";

let pedidos = new Pedido(email, quantidade, nome);

module.exports.registrarPedido = async (event, context, callback) => {
  pedidos.save(email, quantidade, nome, callback);
  //mailer.enviarEmail();
  return {
    statusCode: 200,
    
    body: JSON.stringify({
      message: nome + ', seu pedido foi registrado com sucesso!',
      input: event, 
    }),
  };  
  
  

};
