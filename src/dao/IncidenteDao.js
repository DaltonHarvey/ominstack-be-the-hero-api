const dao = require('./Dao');

class IncidenteDao {

  constructor() { }

  async _create(ong) {
    return dao('incidente').insert(ong);
  }

  async _findAll(page) {

    return dao('incidente')
            .join('ong','ong.id','=','incidente.ongId')
            .limit(5)
            .offset((page - 1)* 5)
            .select(['incidente.*', 'ong.name', 'ong.ongNumber']);
  }

  
  // async _findAllById(Id) {

  //   return dao('incidente')
  //           .join('ong','ong.id','=','incidente.ongId')
  //           .where('incidente.ongId', Id)
  //           .select(['incidente.*', 'ong.name', 'ong.ongNumber'])
            
  // }

  async _getIncidentSize() {

    return dao('incidente').count()
  }

}

module.exports = new IncidenteDao();