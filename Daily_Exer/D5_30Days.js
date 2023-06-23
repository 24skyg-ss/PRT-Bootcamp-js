//  EJERCICIOS NIVEL 1

/*
    1.   Declara un array vacío.
*/
const newArray = Array();
console.log(newArray);

/*
    2.  Declara un array com mas de 5 elementos.
*/
const arr_1 = [1,2,3,4,5];

/*
    3.  Encuentra la longitud de tu array.
*/
const length_arr = arr_1.length;
console.log(length_arr);

/*
    4.  Obtenga el primer elemento, el elemento del medio y el último elemento de un array.
*/
const first_e = arr_1[0];
const final_e = arr_1[length_arr-1]; 
const medio_e = arr_1[Math.floor(length_arr/2)];

/*
    5.  Declara un array llamado mixedDataTypes, coloque diferentes tipos de datos en el array 
    y encuentre la longitud del array. El tamaño del array debe ser mayor que 5.
*/
const mixedDataTypes = [1,4.2,'Text',true,null,undefined];

/*
    6.  Declare un variable array de nombre itCompanies y asignarles valores iniciales 
    Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon.
*/
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon'];

/*
    7.  Imprima el array usando console.log().
*/
console.log(itCompanies);

/*
    8.  Imprima el número de empresas en el array.
*/
console.log(itCompanies.length);

/*
    9.  Imprime la primer empresa , la intermedia y la última empresa
*/
console.log(`${itCompanies[0]}, ${itCompanies[Math.floor(itCompanies.length/2)]}, ${itCompanies[itCompanies.length-1]}`);

/*
    10. Imprime cada empresa.
*/
console.log(itCompanies);

/*
    11. Cambie el nombre de cada empresa a mayúsculas uno por uno e imprímalos.
*/
const itCompaniesMayus = itCompanies.map(enter => enter.toUpperCase());
console.log(itCompaniesMayus);

/*
    12. Imprime el array como una oración: 
    Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon son grandes empresas de TI.
*/
console.log(`${itCompanies} son grandes empresas de TI.`);


/*
    13. Compruebe si existe una determinada empresa en el array itCompanies. 
    Si existe, retorna la empresa; de lo contrario, retorna la empresa no existe
*/
console.log(itCompanies.find(enter => enter === "IBM"));

/*
    14. Filtre las empresas que tienen más de una 'o' sin el método filter()
*/
console.log(itCompanies.filter(enter => enter.includes("o")));

/*
    15. Ordene el array usando el método sort()
*/
itCompanies.sort();
console.log(itCompanies);

/*
    16. Invierte la array usando el método reverse()
*/
itCompanies.reverse();
console.log(itCompanies);

/*
    17. Cortar las primeras 3 empresas del array
*/
const arr_a = itCompanies.slice(0,3)
console.log(arr_a);

/*
    18. Cortar las últimas 3 empresas del array
*/
const arr_b = itCompanies.slice(itCompanies.length-3)
console.log(arr_b);

/*
    19. Cortar la empresa o empresas intermedias de TI del array
*/
const arr_c = itCompanies.slice(Math.floor((itCompanies.length)/2),-3)
console.log(arr_c);

/*  
    20. Eliminar la primera empresa de TI del array
*/
itCompanies.shift();
console.log(itCompanies);

/*
    21. Eliminar la empresa o empresas intermedias de TI del array
*/
itCompanies.splice(Math.floor(itCompanies.length-1)/2,1);
console.log(itCompanies);

/*
    22. Elimine la última empresa de TI del array
*/
itCompanies.pop();
console.log(itCompanies);

/*
    23. Eliminar todas las empresas de TI
*/
itCompanies.splice(0,itCompanies.length);
console.log(itCompanies);


//  EJERCICIOS NIVEL 2

/*
    1.  Primero elimine todos los signos de puntuación y cambie de string a array 
    y cuente el número de palabras en el array   
*/
let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let clean = text.replace(/,/g,'');
console.log(clean.split(" ").length);

/*
    2.  En el siguiente carrito de compras agregue, elimine, edite artículos

    Agregue 'Meat' al comienzo de su carrito de compras si aún no se ha agregado
    Agregue 'Sugar' al final de su carrito de compras si aún no se ha agregado
    Elimine 'Honey' si es alérgico a la miel (honey)
    Modificar Tea a 'Green Tea'
*/
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

shoppingCart.unshift("Meat");
shoppingCart.push("Sugar");
shoppingCart.splice(shoppingCart.indexOf("Honey"));
shoppingCart.splice(shoppingCart.indexOf("Tea"),1,"Green Tea");

console.log(shoppingCart);

/*
    3.  Concatene las siguientes dos variables y guardelas en una variable fullStack.
*/
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);
