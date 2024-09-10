const { Console } = require('console');
const path = require('path');

const filepath = path.join('/public','dist','/styles','main.css');//junta una ruta para hacerlo válida


console.log(filepath);
console.log(path.basename(filepath));
console.log(path.dirname(filepath));
console.log(path.parse(filepath));
console.log(path.resolve('dist'));