'use strict';
  
module.exports.registrarPedido = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Pedido registrado com sucesso!',
      input: event,
    }),
  };  

};
