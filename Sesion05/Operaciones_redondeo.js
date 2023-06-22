//  Principales operaciones aritméticas
let a = 3.5;
let b = 4.8;

//  Suma
console.log(a+b);
//  Resta
console.log(a-b);
//  Multiplicación
console.log(a*b);
//  División
console.log(a/b);

//  Representación de los números en strings
console.log(typeof a);
let a_s = a.toString();
console.log(a_s);

//  Redondeo de números decimales
let c = 3.3;
let d = c * 3;
console.log(d);

//  .toFixed(x)     Limita el número de decimales al valor x
console.log(d.toFixed());
console.log(typeof d.toFixed(4));       // string

let e = 1839.123456789;
let f = 221232134234;

//  .toPrecision(x) Limita el número de cifras significativas
console.log(e.toPrecision(4));
console.log(f.toPrecision(7));

console.log(typeof f.toPrecision(7));   // string
