
// Entidad cliente
const clientes = [
  { 
    id: 1313121301, 
    nombre: 'Mercedes', 
    apellido: 'Gonzalez', 
    telefono: 0990858601, 
    email: 'mercedesg@email.com', 
    ciudad: 'Manta', 
    direccion: 'Calle 1'
  },
  { 
    id: 1313121302, 
    nombre: 'Byron', 
    apellido: 'Cevallos', 
    telefono: 0990858602, 
    email: 'byronc@email.com', 
    ciudad: 'Manta', 
    direccion: 'Calle 2'
  },
  { 
    id: 1313121303, 
    nombre: 'Fernanda', 
    apellido: 'Campos', 
    telefono: 0990858603, 
    email: 'fernandac@email.com', 
    ciudad: 'Montecristi', 
    direccion: 'Calle 3'
  },
  { 
    id: 1313121304, 
    nombre: 'Carlos', 
    apellido: 'Villavicencio', 
    telefono: 0990858604, 
    email: 'carlosv@email.com', 
    ciudad: 'Portoviejo', 
    direccion: 'Calle 4'
  },
  { 
    id: 1313121305, 
    nombre: 'Marlene', 
    apellido: 'Jara', 
    telefono: 0990858605, 
    email: 'marlenej@email.com', 
    ciudad: 'Manta', 
    direccion: 'Calle 5'
  },
];

// Entidad mesero
const meseros = [
  { 
    id: 1313121306, 
    nombre: 'Juan', 
    apellido: 'Perez', 
    telefono: 0990858606, 
    email: 'juanp@email.com', 
    ciudad: 'Santa Ana', 
    direccion: 'Calle 6'
  },
  { 
    id: 1313121307, 
    nombre: 'Maria', 
    apellido: 'Garcia', 
    telefono: 0990858607, 
    email: 'mariag@email.com', 
    ciudad: 'Manta', 
    direccion: 'Calle 7'},
  { 
    id: 1313121308, 
    nombre: 'Pedro', 
    apellido: 'Lopez', 
    telefono: 0990858608, 
    email: 'pedrol@email.com', 
    ciudad: 'Jaramijo', 
    direccion: 'Calle 8'
  },
  { 
    id: 1313121309, 
    nombre: 'Jaime', 
    apellido: 'Serrano', 
    telefono: 0990858609, 
    email: 'jaimes@email.com', 
    ciudad: 'Manta', 
    direccion: 'Calle 9'
  },
  { 
    id: 1313121310, 
    nombre: 'Raquel', 
    apellido: 'Velasco', 
    telefono: 0990858610, 
    email: 'raquelv@email.com', 
    ciudad: 'Manta', 
    direccion: 'Calle 10'
  },
];

// Entidad transaccional propina
const propinas = [
  {
    monto: 20, 
    mesero_id: 1313121306, 
    cliente_id: 1313121301
  },
  {
    monto: 15, 
    mesero_id: 1313121306, 
    cliente_id: 1313121302
  },
  { 
    monto: 10, 
    mesero_id: 1313121307, 
    cliente_id: 1313121303
  },
  {
    monto: 5, 
    mesero_id: 1313121308, 
    cliente_id: 1313121304
  },
  {
    monto: 12, 
    mesero_id: 1313121307, 
    cliente_id: 1313121305
  },
  {
    monto: 8, 
    mesero_id: 1313121309, 
    cliente_id: 1313121302
  },
  {
    monto: 15, 
    mesero_id: 1313121310, 
    cliente_id: 1313121304
  },
  {
    monto: 2, 
    mesero_id: 1313121309, 
    cliente_id: 1313121301
  },
];

module.exports = {
  clientes,
  meseros,
  propinas,
};
