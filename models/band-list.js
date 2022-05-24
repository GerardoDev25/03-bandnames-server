const Band = require('./band');

class BandList {
  constructor() {
    this.bands = [new Band('banda 1'), new Band('banda 2'), new Band('banda 3'), new Band('banda 4')];
  }

  addBand(name) {
    const newBand = new Band(name);
    this.bands.push(newBand);
    return this.bands;
  }

  removeBand(id) {
    this.bands.filter((band) => band.id !== id);
  }

  get getBand() {
    return this.bands;
  }

  increaseVotes(id) {
    this.bands = this.bands.map((band) => {
      if (band.id === id) band.votos += 1;
      return band;
    });
  }

  changeBandName(id, name) {
    this.bands = this.bands.map((band) => {
      if (band.id === id) band.name = name;
      return band;
    });
  }
}

module.exports = BandList;
