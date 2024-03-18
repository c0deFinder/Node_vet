const operaciones = require('./operaciones');

const [, , accion, ...params] = process.argv;

if (accion !== 'registrar' && accion !== 'leer') {
  console.log('opcion no válida. ingrese "registrar" o "leer".');
  
}

if (accion === 'registrar') {
  
  if (params.length > 10) {
    console.log('Error:Debes proporcionar la informacion requerida: nombre, edad, especie, color,sintomas y enfermedad.');
    
  }

  const [nombre, edad, tipo, color,sintomas, enfermedad] = params;
  const nuevaCita = { nombre, edad, tipo, color,sintomas, enfermedad };
  operaciones.registrarCita(nuevaCita);
} else if (accion === 'leer') {
  const citas = operaciones.leerCitas();

  if (citas.length === 0) {
    console.log('No hay citas registradas.');
  } else {
    citas.forEach(cita => {
      console.log('Cita');
      console.log(`Nombre de la mascota: ${cita.nombre}`);
      console.log(`Especie: ${cita.tipo}`);
      console.log(`Color: ${cita.color}`);
      console.log(`Sintomas: ${cita.sintomas}`);
      console.log(`Enfermedad: ${cita.enfermedad}`);
      console.log('Datos registrados sastifactoriamente')
      
    });
  }
}