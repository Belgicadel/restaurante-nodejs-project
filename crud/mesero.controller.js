const Mesero = require("../models/meseros.model");

exports.crearMesero = async (req, res) => {
  try {
    const mesero = new Mesero(req.body);
    await mesero.save();
    res.status(201).json(mesero);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.obtenerMeseros = async (req, res) => {
  try {
    const meseros = await Mesero.find({});
    res.status(200).json(meseros);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.actualizarMesero = async (req, res) => {
  try {
    const mesero = await Mesero.findByIdAndUpdate(
      req.params.meseroId,
      req.body,
      { new: true }
    );
    res.status(200).json(mesero);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.eliminarMesero = async (req, res) => {
  try {
    await Mesero.findByIdAndDelete(req.params.meseroId);
    res.status(204).send();
  } catch (error) {
    res.status(400).send(error);
  }
};
