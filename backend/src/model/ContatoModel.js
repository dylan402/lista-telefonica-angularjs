const sql = require('mssql');

const config = require('../config/database.js');

const conn = new sql.ConnectionPool(config);

exports.carregarTodosContatos = () => {
  return conn
    .connect()
    .then(pool => {
      return pool.query(
        ` SELECT CT.CodContato, CT.Nome, CT.Telefone, OP.Nome AS NomeOperadora, CT.DataRegistro
          FROM Projeto..Contatos (NOLOCK) AS CT
            INNER JOIN Projeto..Operadoras (NOLOCK) AS OP ON CT.Operadora = OP.CodOperadora `
      );
    })
    .finally(() => {
      conn.close();
    });
};

exports.adicionarContato = ({ nome, telefone, operadora }) => {
  return conn
    .connect()
    .then(pool => {
      return pool.query(
        `INSERT INTO Projeto..Contatos (Nome, Telefone, Operadora, DataRegistro) VALUES ('${nome}', '${telefone}', ${operadora}, GETDATE())`
      );
    })
    .finally(() => {
      conn.close();
    });
};
