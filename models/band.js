const { v4: uuid } = require('uuid');

class Band {
  constructor(name) {
    this.id = uuid();
    this.name = name;
    this.votos = 0;
  }
}

module.exports = Band;
