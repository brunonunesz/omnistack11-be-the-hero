const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connections');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileIncidentController = require('./controllers/ProfileIncidentController');
const SessionController = require('./controllers/SessionController');

//Dessa forma centralizamos as rotas.
const routes = express.Router();

routes.post('/ongs', OngController.create); 
routes.get('/ongs', OngController.list);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.list);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileIncidentController.listForSpecificOng);

routes.post('/sessions', SessionController.create);

//Para exportar uma variável de dentro de um arquivo.
module.exports = routes;