class Pedidos {
  constructor(email, quantidade, nome) {
    this.email = email;
    this.quantidade = quantidade;
    this.nome = nome;
  }

  save(e, q, n, c) {
    const pedido = {
      email: e,
      quantidade: q,
      nomeUsuario: n,
      created_at: Date.now()
    }
    console.log('pedido salvo!');
    console.log(pedido);

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