const sessionDao = require('../dao/SessionDao');
const appString = require('../appStrings/AppStrings');

class SessionController {

  constructor() { }

  async create(request, response) {

    const { Id } = request.body;

    const ong = await sessionDao._findOngByNumber(Id);

    if(!ong) return response.status(400).json({ 
      message: appString.ongNotFoundById 
    });
    return response.status(200).json(ong);
  }
}

module.exports = new SessionController();