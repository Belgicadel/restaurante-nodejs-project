const data = require('./datos');
const { obtenerMeseros, obtenerPropinas } = require('./obtener');

//Async/Await
async function buscarPropinas(meseroId) {
  const meseros = await obtenerMeseros();
  const propinas = await obtenerPropinas();

  const propinasConMesero = propinas.map((propina) => {
    const mesero = meseros.find((mesero) => mesero.id === propina.mesero_id);
    return { ...propina, mesero };
  });

  return propinasConMesero.filter((propina) => propina.mesero.id === meseroId);
}

module.exports = {
  buscarPropinas,
};

buscarPropinas().then((propinas) => {
  console.log(propinas);
});
