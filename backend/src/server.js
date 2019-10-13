const express = require('express');

const app = express();
const ContatoRoutes = require('./routes/ContatoRoutes.js');
const OperadoraRoutes = require('./routes/OperadoraRoutes.js');

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(ContatoRoutes);
app.use(OperadoraRoutes);

app.listen(3333);
