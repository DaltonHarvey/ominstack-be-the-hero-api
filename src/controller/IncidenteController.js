const incidenteDao = require('../dao/IncidenteDao');
const appString = require('../appStrings/AppStrings');

class IncidenteController {

  constructor() { }

  async create(request, response) {
    
    const { title, description, value } = request.body;
    const ongId = request.headers.authorization;

    const [ Id ] = await incidenteDao._create({ title, description, value, ongId })

    return response.json({ Id: Id });
  }

  async findAll(request, response) {

    const { page = 1 } =  request.query;

    const [ count ] = await incidenteDao._getIncidentSize();

    response.header(appString.headerSize, count['count(*)']);

    return response.json(await incidenteDao._findAll(page));
  }

}

module.exports = new IncidenteController();