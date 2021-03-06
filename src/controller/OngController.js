const Id = require('../util/GenerateRandomNumber')
const ongDao = require('../dao/OngDao');

class OngController {

  constructor() { }

  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    const ongNumber = Id.generateId();

    await ongDao._create({name, email, whatsapp, ongNumber, city, uf })

    return response.json({ ongNumber: ongNumber });
  }

  async findAll(request, response) {
    return response.json(await ongDao._findAll());
  }

  async findById(request, response) {

    const Id = request.headers.authorization;

    return response.json(await ongDao._findById(Id));
    
  }
}

module.exports = new OngController();