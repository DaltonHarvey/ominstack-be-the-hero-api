const crypto = require('crypto');

module.exports = {
  generateId : ()=>{
    return crypto.randomBytes(4).toString('HEX');
  }
}