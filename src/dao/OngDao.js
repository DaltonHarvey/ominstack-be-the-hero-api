const dao = require('./Dao');

class OngDao {

  constructor() { }

  async _create(ong) {
    return dao('ong').insert(ong);
  }

  async _findAll() {
    return dao('ong').select('*');
  }

  async _findById(Id) {
    return dao('ong')
            .where('id', Id)
            .select('*')
  }
  
}

module.exports = new OngDao()