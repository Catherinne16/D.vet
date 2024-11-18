
const fs = require('fs');
const {registrar, leer} = require('./operaciones.js');
const args = process.argv.slice(2);


if (!fs.existsSync('operaciones.js')) {
    fs.writeFileSync('operaciones.js', '');
}

if (!fs.existsSync('citas.js')) {
    fs.writeFileSync('citas.js', '[]', 'utf-8');
}


const operacion = args[0];
if (operacion === 'registrar') { 
    const [nombre, edad, tipo, color, enfermedad] = args.slice(1);
    registrar(nombre, edad, tipo, color, enfermedad);
}

if (operacion === 'leer') { 
    leer();
}
