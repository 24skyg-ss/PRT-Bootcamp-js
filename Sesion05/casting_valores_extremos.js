//  .valueOf    Obtener valor numéricos a partir de literales
let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a.valueOf() + b.valueOf());

console.log(b.valueOf());

let str = new String("Hola soy un string");
console.log(str);
console.log(str.valueOf());

//  NaN     (Not a Number) Infinity
let n = Number('adios');
console.log(n);     // NaN
console.log(isNaN(n));

let num = 19;
let divisor = 0;
let divisor_2 = null;

console.log(num / divisor);     //  Infinity
console.log(num / divisor_2);   //  Infinity

//  Convertir strings a valor numéricos con Number, parseInt, parseFloat
let numero = '5.89';
let numero_2 = 17.2;

console.log(typeof numero);
console.log(numero + numero_2); //  5.8917.2

console.log(Number(numero) + numero_2);

console.log(parseInt(numero));
console.log(parseFloat(numero));

let num_3 = 4;
console.log(parseFloat(num_3));  //  4

//  Números hexadecimales (base 16)
let numHex = '0x3a5b7';
console.log(parseInt(numHex,16));   //  239031

//  Valores min y max.
let min_precision = Number.EPSILON;
let min_valor_js = Number.MIN_VALUE;
let max_valor_js = Number.MAX_VALUE;

console.log(min_precision);     //  2.220446049250313e-16
console.log(min_valor_js);      //  5e-324
console.log(max_valor_js);      //  1.7976931348623157e+308
console.log(2 ** 1024);         //  Infinity