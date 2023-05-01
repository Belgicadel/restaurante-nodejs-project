
// Modelo Propina
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const propinaSchema = new Schema({
  monto: {
    type: Number,
    required: true
  },
  mesero_id: {
    type: Number,
    required: true,
    ref: 'Mesero'
  },
  cliente_id: {
    type: Number,
    required: true,
    ref: 'Cliente'
  }
});

const Propina = mongoose.model('Propina', propinaSchema);

module.exports = Propina;
