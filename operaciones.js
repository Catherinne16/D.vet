const citas = require('./citas.js');
const fs = require('fs');

const registrar = (nombre, edad, tipo, color, enfermedad) => {
    const cita = {
        nombre,
        edad,
        tipo,
        color,
        enfermedad
    };

    citas.push(cita);
    const nuevoContenido = `
        const citas = ${JSON.stringify(citas, null, 2)};
module.exports = citas;`;
        fs.writeFileSync('citas.js', nuevoContenido.trim());
    };

const leer = () => {
    console.table(citas);
};

module.exports = {registrar, leer};
