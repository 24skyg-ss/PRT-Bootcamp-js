//  EJERCICIOS NIVEL 1

const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ["Finland", "Sweden", "Norway"];

/*
    1.  crear un set vacío
*/
const new_set = new Set();
console.log(new_set);

/*
    2.  Crear un set que contenga de 0 a 10 utilizando el bucle
*/
for (let i = 0; i < 10; i++) {
    new_set.add(i+1);
}
console.log(new_set);

/*
    3.  Eliminar un elemento de set
*/
new_set.delete(10);
console.log(new_set);

/*
    4.  Limpia set
*/
new_set.clear();
console.log(new_set);

/*
    5.  Crear un set de 5 elementos string a partir de un array
*/
const arr = ['Javacript','CSS','HTML','React','Angular']
const setLang = new Set(arr);
console.log(setLang);

/*
    6.  Crear un map de países y el número de caracteres de un país
*/
const map = new Map(countries.map((c) => {
    return [c,c.length];
}));
console.log(map);


//  EJERCICIOS NIVEL 2

/*
    1.  Encontrar la unión b
*/
let dif_B = new Set(b.filter((num) => !a.includes(num)));
console.log(dif_B);

/*  
    2.  Encontrar la interseción b
*/
let inter_B = new Set(b.filter((num) => a.includes(num)));
console.log(inter_B);

/*
    3.  Encontrar a con b
*/
let union = [...a,...b];
let unionAB = new Set(union.sort((a,b) => a - b));
console.log(unionAB);
