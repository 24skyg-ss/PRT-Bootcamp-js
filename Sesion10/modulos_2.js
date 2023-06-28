//  Formas de importar
/*
    1.  CommonJS    -   require
    2.  Import ES6  -   import

    console.log(module);
*/

//  
const moduleMats = require("./Sesion10/modulos_1.js");
console.log(moduleMats);

const fact = moduleMats.factorial(5);
console.log(fact);

const sum = moduleMats.suma(3,5);
console.log(sum);

//  
const { factorial, suma } = require("./Sesion10/modulos_1.js");
const fact_2 = factorial(6);
console.log(fact_2);

const sum_2 = suma(32,12);
console.log(sum_2);