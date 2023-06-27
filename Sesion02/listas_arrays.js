// Listas, array o arreglo
const lista = [1,"hola",true]
const lista2 = new Array(2,"adios",false);
const lista3 = [lista,lista2];

console.log(lista);
console.log(lista2);
console.log(lista3);

// Objetos
const movil = {
    altura: 10,
    anchura: 5,
    marca: "Xiaomi",
    isWhite: true,
    contactos: ["Gorka","Martín"],
    tarjeta: {
        marca: "Sandisk",
        almacenamiento: 21
    },
    "altura-tarjeta": 23
}

movil.anyo = 2019;
movil.marca = "Samsung"

console.log(movil.marca)

// Fechas
// Librerias de apoyo: Moment.js
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10);
console.log(fecha_milis);

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const anyo = ahora.getFullYear();

console.log(dia, mes, anyo);