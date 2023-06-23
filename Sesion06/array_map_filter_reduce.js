//  Métodos array avanzados
//  .map() .filter() .reduce()

const array = ["Madrid", "La plata", "Barcelona", "Bilbao"]
const val = array.forEach(v => {
    console.log(v)
    return 4
})
console.log(val)

const newArray = array.map((valor,indice) => `${indice+1} - ${valor}`)
console.log(newArray);  
//  ["1 - Madrid", "2 - La plata", "3 - Barcelona", "4 - Bilbao"]

const listaObjetos = [
    { nombre: "Leire", edad: 35 },
    { nombre: "Gorka", edad: 34 },
    { nombre: "Miguel", edad: 21},
    { nombre: "Amania", edad: 29}
]

/*
    listaObjetos.filter(obj => {
        if (obj.edad > 30) {
            return true
        } else {
            return false
        }
    })
*/

const personasMayores = listaObjetos.filter(obj => obj.edad > 30)
console.log(personasMayores)

const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Miguel")
console.log(nuevaLista)

const valores = [3, 55, 23, 5, 90, 100]
const suma = valores.reduce((acumulado, cur, i, arrayOriginal) => {
    console.log(acumulado)
    console.log(cur)
    console.log(i)
    console.log(arrayOriginal)
    return acumulado + cur
})
console.log(suma)   //  277
