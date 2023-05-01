const Cliente = require("../models/clientes.model");

exports.crearCliente = async (req, res) => {
  try {
    const cliente = new Cliente(req.body);
    await cliente.save();
    res.status(201).json(cliente);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.obtenerClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find({});
    res.status(200).json(clientes);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.actualizarCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByIdAndUpdate(
      req.params.clienteId,
      req.body,
      { new: true }
    );
    res.status(200).json(cliente);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.eliminarCliente = async (req, res) => {
  try {
    await Cliente.findByIdAndDelete(req.params.clienteId);
    res.status(204).send();
  } catch (error) {
    res.status(400).send(error);
  }
};
