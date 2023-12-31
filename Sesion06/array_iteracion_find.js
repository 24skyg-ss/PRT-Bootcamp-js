//  Iterar valores de una lista
const array = ["hola",2,5,90,false,undefined]

//  Forma antigua (poco eficiente)
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

//  Forma ES6 (más eficiente) .forEach()
let suma = 0;
const arrayNums = [3, 6, 2, 77, 2, 5, 21, 12];
arrayNums.forEach(valor => {
    suma += valor;
    console.log(valor);
})
console.log(suma);

//  Busqueda
const variable = array.find(valor=>{
    if(valor===90){
        return true;
    }
});
console.log(variable);

const listaObjetos = [
    { nombre: "Leire", edad: 35 },
    { nombre: "Gorka", edad: 34 },
    { nombre: "Miguel", edad: 21}
]

//  const objeto = listaObjetos.find(o => {
//      if(o.nombre==="Miguel"){
//          return true;
//      }
//  })

const objeto = listaObjetos.find(o => o.nombre === "Miguel")
console.log(objeto.edad);

const { edad } = listaObjetos.find(o => o.nombre === "Lucía")
console.log(edad);