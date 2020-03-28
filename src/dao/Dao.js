const knex = require('knex');
const knexfile = require('../../knexfile');

class Dao {
  constructor() { this.init() }

  init() {
    this.connectionFactory = knex(knexfile.development);
  }
}

module.exports = new Dao().connectionFactory;