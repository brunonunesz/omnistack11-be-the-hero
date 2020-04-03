/**
 * Para fazer o rollback utilize o 'npx migrate:rollback'
 */
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments(); // Criar uma primary key incremental.
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        //Relacionamento entre tables
        table.string('ong_id').notNullable();
        //Foreign key's de outra tabela para o relacionamento
        table.foreign('ong_id').references('id').inTable('ongs');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
