const mongoose = require('mongoose');
const Cliente = require('../models/clientes.model');
const Mesero = require('../models/meseros.model');
const Propina = require('../models/propina.model');

const { buscarPropinas } = require('./buscar');

// URL de conexión a la base de datos en MongoDB Atlas
const mongoURI = 'mongodb+srv://jordan-zamora_01:Ch4rizh44@atlascluster.sjsljao.mongodb.net/restaurante';

(async ()=>{
  try {

    // Configuración de Mongoose para conectarse a la base de datos
    const connection = await mongoose.connect(mongoURI)

    /*
    // Agregar clientes a la base de datos
    await Cliente.insertMany(require('./datos').clientes);
    // Agregar meseros a la base de datos
    await Mesero.insertMany(require('./datos').meseros);
    // Agregar propina a la base de datos
    await Propina.insertMany(require('./datos').propinas);
    */

    // Imprimir los datos de las colecciones
    console.log('Clientes:');
    await Cliente.find({}, (err, clientes) => {
      if (err) console.log(err);
      console.log(clientes);
    });

    console.log('Meseros:');
    await Mesero.find({}, (err, meseros) => {
      if (err) console.log(err);
      console.log(meseros);
    });

    console.log('Propinas:');
    await Propina.find({}, (err, propinas) => {
      if (err) console.log(err);
      console.log(propinas);
    });
    
    // Buscar las propinas de un mesero por terminal
    const propinas = await buscarPropinas(1313121306);
      console.log(propinas);

  } catch (e) {
    console.log('Error al conectar a la base de datos:', e);
  }

})();

// Ejecutar en la terminal
buscarPropinas(1313121307)
  .then((propinas) => {
    console.log(`Mesero: ${propinas[0].mesero.nombres}`);
    console.log('Propinas:');
    propinas.forEach((propina) => {
      console.log(`- ${propina.monto}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
