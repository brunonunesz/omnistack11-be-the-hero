/**
 * Utilizamos o migration para criar tabelas e manter um históricos 
 * das tabelas alteradas ou criadas.
 * Então quando executamos as migrations será criada no DB.
 * 
 * Para criar as tabelas com o migrate utilize o comando 'npx knex migrate:make <name-table>'
 * Para rodar as migrates utilize o comando 'npx knex migrate:latest'
 */
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function(table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable(); //Tamanho da String.

  }); //Create table.
};

exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};
