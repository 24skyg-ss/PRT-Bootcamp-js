// import * as modules from './modulos.js';
import { suma,eleva,factorial,name } from './modulos.js';
import getAuthor, { libro } from './mods_str.js';
//  importar x defecto , nomenclatura

// const sum = modules.suma(2,3);
const sum = suma(2,3);
console.log(sum);

const potencia = eleva(2,3);
console.log(potencia);

const fact = factorial(5);
console.log(fact);

console.log(name);

console.log(getAuthor());
console.log(libro);