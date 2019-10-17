const sql = require('mssql');

const config = require('../config/database.js');

const conn = new sql.ConnectionPool(config);

exports.carregarTodasOperadoras = () => {
  return conn
    .connect()
    .then(pool => {
      return pool.query(
        'SELECT CodOperadora, Nome, Categoria, Preco FROM Projeto..Operadoras (NOLOCK)'
      );
    })
    .finally(() => {
      conn.close();
    });
};
