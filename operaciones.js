const fs = require('fs');
const rutaCitas = './citas.json';

function registrarCita(cita) {
  const citas = leerCitas();
  citas.push(cita);

 
  fs.writeFileSync(rutaCitas, JSON.stringify(citas, null));

  console.log('Cita registrada correctamente.');
}

function leerCitas() {
  try {
    const citasData = fs.readFileSync(rutaCitas, 'utf-8');
    return JSON.parse(citasData);
  } catch (error) {
    return [];
  }
}
module.exports = {
  registrarCita,
  leerCitas,
};