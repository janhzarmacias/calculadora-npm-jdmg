const suma = require('./2025a-swgr1-jdmg-suma');
const resta = require('./2025a-swgr1-jdmg-resta');
const multiplicacion = require('./2025a-swgr1-jdmg-multiplicacion');
const division = require('./submodulos/jdmg-modulo-division/2025a-swgr1-jdmg-division');

console.log("suma(2,1) =>", suma.suma(2,1));
console.log("resta(3,2) =>", resta.resta(3,2));
console.log("multiplicacion(2,5) =>", multiplicacion.multiplicacion(2,5));
console.log("division(9,3) =>", division.division(9,3));
