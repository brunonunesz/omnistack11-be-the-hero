/**
 * Estamos criando uma conexão com o DB para um ambiente.
 * Exportamos para quem quiser trabalhar com DB importe e utilize 
 * no seu arquivo.
 */

const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development);

module.exports = connection;