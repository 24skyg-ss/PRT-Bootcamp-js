//  .some()
const array = [3, 7, 2, 4, 7, 9, 42, 35, 7865, 23, -2]
const res = array.some(valor => valor < 0)
console.log(res)        //  true

const existe = array.some(valor => valor === 9)
console.log(existe)     //  true

const listaObjetos = [
    { nombre: "Leire", edad: 35 },
    { nombre: "Gorka", edad: 34 },
    { nombre: "Miguel", edad: 21},
    { nombre: "Amania", edad: 29}
]
const existeLiere = listaObjetos.some(person => person.nombre === "Juan")
console.log(existe)     //  true

//  Obtener una lista a partir de un objeto iterable
const str = "Texto"
console.log(str[4])     //  o

const ar_str = Array.from(str)
console.log(ar_str)     //  ['T','e','x','t','o']

const set = new Set([2,3, "hola", 4])
const ar_set = Array.from(set)
console.log(ar_set)

const keys = array.keys()
console.log(keys)

//  Acceso a las keys de array
const ar_keys = Array.from(keys)    //  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(ar_keys)                //  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(array.length)           //  11
