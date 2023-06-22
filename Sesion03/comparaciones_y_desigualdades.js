//  Comparaciones

//  Igualdad
if (5 == 5) {
    console.log("5 es igual a 5 - Débil");
}

if (5 === 5) {
    console.log("5 ss muy igual a 5 - Fuerte");
}

//  Desigualdad 
let c = "4";
let d = 10;

//  Debíl
if (c != d){
    console.log("c es diferentes a d - Débil");
}

//  Fuerte
if (c !== d){
    console.log("c es diferentes a d - Fuerte");
}

// Mayores y menores
let max  = 10;
let min = 5;

if (max > min) {
    console.log("max es mayor que min.");
}

if (min <= max) {
    console.log("min es menor o igual que max.");
}