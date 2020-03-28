
exports.up = function(knex) {
  return knex.schema.createTable('incidente', function (table){
    
    table.increments();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.string('value').notNullable();

    table.string('ongId').notNullable();

    table.foreign('ongId').references('id').inTable('ong');

  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidente');
};