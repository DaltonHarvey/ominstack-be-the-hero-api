const appString = require('../appStrings/AppStrings');

class HomeController {

  constructor() { }

  index(request, response) {
    return response.status(200).json({ message: appString.serverResposnse })
  }

}

module.exports = new HomeController();