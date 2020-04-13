const dao = require('./Dao');

class SessionDao {

  constructor() { }

  async _findOngByNumber(Id) {
    return dao('ong')
            .where('ongNumber', Id)
            .select('name','id')
            .first();
  }
}

module.exports = new SessionDao();