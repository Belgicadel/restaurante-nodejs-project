const data = require('./datos');

//Promise
function obtenerMeseros() {
  return new Promise((resolve, reject) => {
    resolve(data.meseros);
  });
}

function obtenerPropinas() {
  return new Promise((resolve, reject) => {
    resolve(data.propinas);
  });
}

module.exports = {
  obtenerMeseros,
  obtenerPropinas,
};
