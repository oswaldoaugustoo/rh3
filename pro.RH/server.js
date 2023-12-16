const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000 || process.ENV.PORT;

app.use(bodyParser.json());


const formularioData = [];

app.post('/salvar-formulario', (req, res) => {
  const dadosFormulario = req.body;
  formularioData.push(dadosFormulario);
  console.log('Dados do formulário salvos:', dadosFormulario);
  res.status(200).json({ message: 'Dados do formulário salvos com sucesso.' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
