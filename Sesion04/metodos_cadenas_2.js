//  Métodos cadenas de texto 2
//  https://regexr.com

let texto_largo = "Tito no es un mono cualquiera. A tito no le gusta trepar los árboles y odia comer plátanos. él prefiere pasear por el bosque, oler las flores y recoger las nueces que caen de los árboles.";

console.log(texto_largo.match(/no/g).length);
console.log(texto_largo.includes("prefiere"));
console.log(texto_largo.includes("ter"));

//  Inicia o finaliza con una palabra
console.log(texto_largo.startsWith("T"));
console.log(texto_largo.endsWith("T"));

