const express = require('express');
const cors = require('cors');
const routes = require('../routes/Routes');

class App {

  constructor()  { this.app = express(); this.init() }

  init() {
    this.app.use(cors())
    this.app.use(express.json());
    this.app.use(routes);
  }
}


module.exports = new App().app;