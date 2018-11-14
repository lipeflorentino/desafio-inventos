class Pedidos {
  constructor(email, db) {
    this.email = email;
    this.db = db;
  }

  save(e, q, n, c) {
    const pedido = {
      email: e,
      created_at: Date.now()
    }
    console.log('pedido salvo!');
    
//     this.db.salvarPedido(pedido, function (err) {
//       if (err) {
//         callback(err);
//       } else {
//         callback();
//       }
//   });
  }
}

module.exports = Pedidos;