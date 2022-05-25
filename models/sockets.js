const BandList = require('./band-list');

class Sockets {
  constructor(io) {
    this.io = io;

    this.bandList = new BandList();

    this.socketEvents();
  }

  socketEvents() {
    this.io.on('connection', (socket) => {
      console.log('cliente conectado');

      socket.emit('current-bands', this.bandList.getBand);

      socket.on('votar-banda', (id) => {
        this.bandList.increaseVotes(id);
        this.io.emit('current-bands', this.bandList.getBand);
      });

      socket.on('borrar-banda', (id) => {
        this.bandList.removeBand(id);
        this.io.emit('current-bands', this.bandList.getBand);
      });

      socket.on('cambiar-nombre', ({ id, name }) => {
        this.bandList.changeBandName(id, name);
        this.io.emit('current-bands', this.bandList.getBand);
      });

      socket.on('agregar-banda', (name) => {
        this.bandList.addBand(name);
        this.io.emit('current-bands', this.bandList.getBand);
      });
    });
  }
}

module.exports = Sockets;
