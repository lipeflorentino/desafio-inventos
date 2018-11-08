class Pedidos {
  constructor(db, mailer) {
    this.db = db;
    this.mailer = mailer;
  }

  save(email, quantidade, nome, callback) {
    const pedido = {
      email: email,
      quantidade: quantidade,
      nomeUsuario: nome,
      created_at: Date.now()
    }

    this.db.salvarPedido(pedido, function (err) {
      if (err) {
        callback(err);
      } else {
        this.mailer.sendWelcomeEmail(email);
        callback();
      }
  });
  }
}

module.exports = Pedidos;