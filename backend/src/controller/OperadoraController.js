const OperadoraModel = require('../model/OperadoraModel.js');

exports.carregarTodasOperadoras = async (req, res) => {
  try {
    const result = await OperadoraModel.carregarTodasOperadoras();

    if (result.recordset.length === 0) return res.status(204).json();

    return res.json(result.recordset);
  } catch (error) {
    return res.status(500).json({ error: 'Ocorreu um erro no servidor.' });
  }
};
