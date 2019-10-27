const sql = require('mssql');

const config = require('../config/database.js');

const conn = new sql.ConnectionPool(config);

exports.carregarTodosContatos = () => {
  return conn
    .connect()
    .then(pool => {
      return pool.query(
        ` SELECT CT.CodContato, CT.Nome, CT.Telefone, OP.Nome AS NomeOperadora, CT.Serial, CT.DataNascimento
          FROM Projeto..Contatos (NOLOCK) AS CT
            INNER JOIN Projeto..Operadoras (NOLOCK) AS OP ON CT.Operadora = OP.CodOperadora `
      );
    })
    .finally(() => {
      conn.close();
    });
};

exports.carregarContato = CodContato => {
  return conn.connect().then(pool => {
    return pool.query(
      ` SELECT CT.CodContato, CT.Nome, CT.Telefone, OP.Nome AS NomeOperadora, CT.Serial, CT.DataNascimento
        FROM Projeto..Contatos (NOLOCK) AS CT
          INNER JOIN Projeto..Operadoras (NOLOCK) AS OP ON CT.Operadora = OP.CodOperadora
        WHERE CT.CodContato = ${CodContato} `
    );
  });
};

exports.adicionarContato = ({ nome, telefone, dataNascimento, operadora, serial }) => {
  return conn
    .connect()
    .then(pool => {
      return pool.query(
        `INSERT INTO Projeto..Contatos (Nome, Telefone, DataNascimento, Operadora, Serial, DataRegistro) VALUES ('${nome}', '${telefone}', '${dataNascimento}', ${operadora}, '${serial}', GETDATE())`
      );
    })
    .finally(() => {
      conn.close();
    });
};
