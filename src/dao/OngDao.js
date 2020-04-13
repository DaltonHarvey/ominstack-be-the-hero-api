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
            .join('incidente','ong.id','=','incidente.ongId')
            .where('ong.id', Id)
            .select(['ong.ongNumber','incidente.id', 'incidente.title', 'incidente.description', 'incidente.value'])
  }
  
}

module.exports = new OngDao()