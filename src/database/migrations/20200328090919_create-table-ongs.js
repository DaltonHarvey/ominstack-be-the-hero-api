
exports.up = function(knex) {
  return knex.schema.createTable('ong', (table)=> {
    table.increments('id').primary();
    table.string('ongNumber').notNullable();
    table.string('name', 255).notNullable();
    table.string('email', 85).notNullable();
    table.string('whatsapp', 85).notNullable();
    table.string('city', 85).notNullable();
    table.string('uf', 2).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('ong');
};
