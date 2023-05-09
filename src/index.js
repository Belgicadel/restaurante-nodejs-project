const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');
const Cliente = require('../models/clientes.model');
const Mesero = require('../models/meseros.model');
const Propina = require('../models/propina.model');

const clienteController = require('../crud/cliente.controller');
const meseroController = require('../crud/mesero.controller');
const propinaController = require('../crud/propina.controller');

const app = express();

app.use(cors());
app.use(express.json());

//const { buscarPropinas } = require('./buscar');

// URL de conexión a la base de datos en MongoDB Atlas
const mongoURI = 'mongodb+srv://belgica-delgado_01:belgica1991@cluster0.r7xacjp.mongodb.net/restaurante';

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
    /*
    // Utilizar cuando se haya subido los datos de clientes, meseros y propinas en MongoDB
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
    */
    /*
    // Buscar las propinas de un mesero por terminal
    const propinas = await buscarPropinas(1313121306);
      console.log(propinas);
    */

  } catch (e) {
    console.log('Error al conectar a la base de datos:', e);
  }

})();


// Obtener todos los clientes
app.get('/clientes', async (req, res) => {
  try {
    const clientes = await Cliente.find({});
    res.json(clientes);
  } catch (e) {
    console.log('Error al obtener clientes:', e);
    res.status(500).json({ error: 'Error al obtener clientes' });
  }
});

/*
// Obtener un cliente por id
app.get('/clientes/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const cliente = await Cliente.findOne({ id: 1313121301 });
    if (cliente) {
      res.json(cliente);
    } else {
      res.status(404).json({ message: 'Client not found' });
    }
  } catch (error) {
    console.log(`Error retrieving client with id ${id} from database:`, error);
    res.status(500).json({ message: 'Error retrieving client from database' });
  }
});

// Crear un cliente
app.post('/clientes', async (req, res) => {
  const { id, nombre, apellido, telefono, email, ciudad, direccion } = req.body;
  const nuevoCliente = new Cliente({
    id: id,
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
    email: email,
    ciudad: ciudad,
    direccion: direccion
  });
  try {
    const clienteGuardado = await nuevoCliente.save();
    res.status(201).json(clienteGuardado);
  } catch (error) {
    console.log('Error saving client to database:', error);
    res.status(500).json({ message: 'Error saving client to database' });
  }
});

// Actualizar un cliente por id
app.put('/clientes/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, telefono, email, ciudad, direccion } = req.body;
  try {
    const clienteActualizado = await Cliente.findOneAndUpdate(
      { id: id },
      {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        email: email,
        ciudad: ciudad,
        direccion: direccion
      },
      { new: true }
    );
    if (clienteActualizado) {
      res.json(clienteActualizado);
    } else {
      res.status(404).json({ message: 'Client not found' });
    }
  } catch (error) {
    console.log(`Error updating client with id ${id} in database:`, error);
    res.status(500).json({ message: 'Error updating client in database' });
  }
});

// Eliminar Cliente por id
app.delete('/clientes/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const clienteEliminado = await Cliente.findOneAndDelete({ id: id });
    if (!clienteEliminado) {
      return res.status(404).json({ mensaje: "No se encontró el cliente especificado" });
    }
    res.status(200).json({ mensaje: "Cliente eliminado exitosamente", cliente: clienteEliminado });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al eliminar el cliente", error: error });
  }
});
*/

const PUERTO = process.env.PUERTO || 3000;
app.listen(PUERTO, () => {
  console.log(`Servidor iniciado en puerto ${PUERTO}`);
});

/*
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

*/
