
// Modelo Mesero
const mongoose = require('mongoose');

const meseroSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  nombre: {
    type: String,
    required: true
  },
  apellido: {
    type: String,
    required: true
  },
  telefono: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  ciudad: {
    type: String,
    required: true
  },
  direccion: {
    type: String,
    required: true
  }
});

const Mesero = mongoose.model('Mesero', meseroSchema);

module.exports = Mesero;
