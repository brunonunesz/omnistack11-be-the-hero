const express = require('express'); //importar modulos, dependências.
const cors = require('cors');
const routes = require('./routes'); //"./" Referencia a pasta atual do arquivo index.js.

const app = express(); //variavel para iniciar a aplicação

app.use(cors());
//Informar que iremos utilizar nas requisições o Request Body com formato em JSON
app.use(express.json());
app.use(routes);


app.listen('3333'); //Define uma porta para a aplicação. Execute node index.js