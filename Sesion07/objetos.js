//  Objects
const obj = {
    id: 5,
    nombre: "Juan",
    apellido: "Gónzalez",
    isDeveloper: true,
    libros_favoritos: ["El método", "El código de la manifestación"],
    "4-juegos": [1,2,3,4]
}

console.log(obj.libros_favoritos);
console.log(obj["4-juegos"]);

const prop = "isDeveloper";
console.log(obj[prop]);

const obj2 = obj;
console.log(obj2);

obj2.nombre = "Iñigo"
console.log(obj2.nombre);   // Iñigo
console.log(obj.nombre);    // Iñigo

////////////////////////////

const obj3 = {...obj};
obj3.nombre = "Gorka";

console.log(obj.nombre);    // Iñigo
console.log(obj3.nombre);   // Gorka

////////////////////////////
//  Ordenamietno de listas de objetos en función de una prop
const listaPeliculas = [
    {titulo: "Lo que el viento se llevó", anyo: 1939},
    {titulo: "Titanic", anyo: 1997},
    {titulo: "Moana", anyo: 2016},
    {titulo: "El efecto mariposa", anyo: 2004},
    {titulo: "TED", anyo: 2022}
]

listaPeliculas.sort((a,b) => a.anyo - b.anyo);
console.log(listaPeliculas)
