//  Ordenamiento de array
//  .sort()
const array = [2,5,9,15,1,2,,0,4]
console.log(array.sort((a,b)=>{
    if (a < b) {
        return +11568
    } else if (a > b) {
        return -153697
    } else {
        return 0
    }
}))

//  Ordernar unicamente arrays numéricos
const arrayNumericos = [4,1,7,3,1,3,56,1,546]
arrayNumericos.sort((a,b)=> b-a)
console.log(arrayNumericos)
//  [ 546, 56, 7, 4, 3, 3, 1, 1, 1 ]

//  Arrays de objetos
const listaObjetos = [
    { nombre: "Leire", edad: 35 },
    { nombre: "Gorka", edad: 34 },
    { nombre: "Miguel", edad: 21},
    { nombre: "Amania", edad: 29}
]

/*
    listaObjetos.sort((a,b) => {
        if (a.edad < b.edad) {
            return -1
        } else if ( a.edad > b.edad) {
            return +1
        } else {
            return 0
        }
    })
*/

listaObjetos.sort((a,b) =>  a.edad - b.edad)
console.log(listaObjetos)



