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

exports.adicionarContato = async (req, res) => {
  try {
    const { nome, telefone, operadora, serial } = req.body;
    const result = await ContatosModel.adicionarContato({ nome, telefone, operadora, serial });

    if (result.rowsAffected[0] !== 0) {
      return res.json({ success: 'O usuário foi cadastrado com sucesso.' });
    }

    return res.status(406).json({ error: 'Não foi possível cadastrar o usuário.' });
  } catch (error) {
    return res.status(500).json({ error: 'Ocorreu um erro no servidor.' });
  }
};
