//  Fechas
const fecha = Date();
console.log(fecha);

const fecha2 = new Date(1987,10,2);
console.log(fecha2);

const fecha3 = Date(-124); // milisegundos
console.log(fecha3);

const fecha4 = Date("October 13, 1979 12:15:15");

console.log(fecha < fecha2);

const fecha5 = new Date(1987,10,2);
console.log(fecha2 === fecha5);     //  false : No es posible la comparación de fechas de esta manera

console.log(fecha2.getTime() === fecha5.getTime());     //  true : Forma correcta de comparar fechas

//  Obtener días, mes y año
console.log(fecha2.getDay());       //  1
console.log(fecha2.getMonth());     //  10
console.log(fecha2.getFullYear());  //  1987

//  Mostrar fecha en un string
console.log(fecha2.toLocaleDateString("en-US"));   //  2/11/1987 | 11/2/2987

