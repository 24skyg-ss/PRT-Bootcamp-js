//  Sets o conjuntos 
const arr = [1,2,3,4,5,2,1,4,6,8,7,1,2, "hola", {id:5}, {id: 5}];
const miSet = new Set(arr);

console.log(arr);
//  [ 1, 2, 3, 4, 5, 2, 1, 4, 6, 8, 7, 1, 2, 'hola', { id: 5 }, { id: 5 } ]
console.log(miSet);
//  Set { 1, 2, 3, 4, 5, 6, 8, 7, 'hola', { id: 5 }, { id: 5 } }


//  .add()
miSet.add(9);
console.log(miSet);

miSet.add(4);
console.log(miSet);
//  Set { 1, 2, 3, 4, 5, 6, 8, 7, 'hola', { id: 5 }, { id: 5 }, 9 }


//  .delete()
miSet.delete("hola");
console.log(miSet);
//  Set { 1, 2, 3, 4, 5, 6, 8, 7, { id: 5 }, { id: 5 }, 9 }

//  .clear()
//  miSet.clear();
//  Set {  }

//  .has()
console.log(arr.includes(2));   //  true
console.log(miSet.has(2));      //  true

//  .size
console.log(miSet.size);        //  11

//  .forEach()
miSet.forEach(valor => {
    console.log(valor);
})

const it_miSet = miSet.values();
console.log(it_miSet);

//  Conversión a un array con el factor de propagación
const ar_miSet = [...miSet]
console.log(ar_miSet);
//  [ 1, 2, 3, 4, 5, 6, 8, 7, { id: 5 }, { id: 5 }, 9 ]
