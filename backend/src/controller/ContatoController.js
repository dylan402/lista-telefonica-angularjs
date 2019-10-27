const ContatosModel = require('../model/ContatoModel.js');

exports.carregarTodosContatos = async (req, res) => {
  try {
    const result = await ContatosModel.carregarTodosContatos();

    if (result.recordset.length === 0) return res.status(204).json();

    return res.json(result.recordset);
  } catch (error) {
    return res.status(500).json({ error: 'Ocorreu um erro no servidor.' });
  }
};

exports.carregarContato = async (req, res) => {
  try {
    const CodContato = req.params.id;

    const result = await ContatosModel.carregarContato(CodContato);

    if (result.recordset.length === 0) return res.status(204).json();

    return res.json(result.recordset[0]);
  } catch (error) {
    return res.status(500).json({ error: 'Ocorreu um error no servidor.' });
  }
};

exports.adicionarContato = async (req, res) => {
  try {
    const { nome, telefone, dataNascimento, operadora, serial } = req.body;
    const result = await ContatosModel.adicionarContato({ nome, telefone, dataNascimento, operadora, serial });

    if (result.rowsAffected[0] !== 0) {
      return res.json({ success: 'O usuário foi cadastrado com sucesso.' });
    }

    return res.status(406).json({ error: 'Não foi possível cadastrar o usuário.' });
  } catch (error) {
    return res.status(500).json({ error: 'Ocorreu um erro no servidor.' });
  }
};
