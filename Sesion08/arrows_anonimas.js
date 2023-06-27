//  Arrow function - Anonimas

const arr = [1,5,6,2,7,12,8,92];

const arr_2 = arr.map((valor) => valor * 2);

console.log(arr);
console.log(arr_2);

const dobleValor = valor => {
    return valor * 2;
}

const dobleDelValor = valor => valor * 2;

console.log(doble(6));
console.log(dobleDelValor(6));

function doble(valor){
    return valor * 2;
}
