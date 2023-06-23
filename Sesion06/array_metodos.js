//  Listas (arrays, arreglos, vectores)

//  let array = new Array();
    let var1 = 45;
    let array = [1, " Test", false, {id:5}, null, undefined, var1];

    console.log(array);

//  Acceder a los valores de un array
    console.log(array[0]);
    console.log(array[1]);
    console.log(array[3]);

//  Métodos para introducir nuevos valores
//  .push() .unshift() => Mutan el valor del array.

//  Valores al final => push
    array.push("final");
    console.log(array);

//  Valores al principio => unshift
    array.unshift("inicio");
    console.log(array);

//  Métodos para eliminar valores 
//  .pop() .shift() Mutan el valor del array.

//  Valores al final => pop
array.pop();
console.log(array);

//  Valores al principio => shift
array.shift();
console.log(array);

//  Método para eliminar, modificar, añadir valores
//  .splice(x,y,z)

const array2 = [1, 2, 3, 4, 5, 6];

//  Eliminar    :   .splice (indice, numValoresAEliminar)
array2.splice(2,2);
console.log(array2);

//  Añadir      :   .splice (indice, 0, valores_nuevos)
array2.splice(2,0,'hola',2);
console.log(array2);

//  Modificar   :   .splice (indice, 1, valores)
array2.splice(2,1,'tres');
console.log(array2);
