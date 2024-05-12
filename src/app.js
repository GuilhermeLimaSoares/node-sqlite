const express = require('express');
const routes = require('../api/routes');

const app = express();

app.use(express.json());
routes(app);

// app.get('/teste', (req, res) => {
//   res
//     .status(200)
//     .send({ mensagem: 'boas-vindas à API' });
// });

module.exports = app;
