const Propina = require("../models/propina.model");

exports.crearPropina = async (req, res) => {
  try {
    const propina = new Propina(req.body);
    await propina.save();
    res.status(201).json(propina);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.obtenerPropinas = async (req, res) => {
  try {
    const propinas = await Propina.find({})
      .populate("mesero_id", "nombre apellido")
      .populate("cliente_id", "nombre apellido");
    res.status(200).json(propinas);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.actualizarPropina = async (req, res) => {
  try {
    const propina = await Propina.findByIdAndUpdate(
      req.params.propinaId,
      req.body,
      { new: true }
    );
    res.status(200).json(propina);
  } catch (error) {
    res.status(400).send(error);
  }
};
exports.eliminarPropina = async (req, res) => {
  try {
    await Propina.findByIdAndDelete(req.params.propinaId);
    res.status(204).send();
  } catch (error) {
    res.status(400).send(error);
  }
};
