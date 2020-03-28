const express = require('express');
const routes = express.Router();

const homeEndPoint = require('../Endpoints/HomeEndPoint');
const homeController = require('../controller/HomeController');

const sessionController = require('../controller/SessionController');

const ongEndPoint = require('../Endpoints/OngEndPoints');
const ongController = require('../controller/OngController');

const incidenteController = require('../controller/IncidenteController');
const incidenteEndPoint = require('../Endpoints/IncidenteEndPoint')

//Home
routes.get(homeEndPoint.get, homeController.index);

//Session
routes.post(ongEndPoint.session, sessionController.create);

//Ong
routes.get(ongEndPoint.get, ongController.findAll);
routes.get(ongEndPoint.profile, ongController.findById);
routes.post(ongEndPoint.post, ongController.create);

//Incidente
routes.get(incidenteEndPoint.get, incidenteController.findAll);
routes.post(incidenteEndPoint.post, incidenteController.create);

module.exports = routes;
