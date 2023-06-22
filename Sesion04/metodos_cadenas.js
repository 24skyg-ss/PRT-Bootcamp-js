
let texto_largo = "Tito no es un mono cualquiera. A tito no le gusta trepar los árboles y odia comer plátanos. él prefiere pasear por el bosque, oler las flores y recoger las nueces que caen de los árboles.";

//  replace reemplaza la primera instancia
console.log(texto_largo.replace('los','cinco'));
//  replace con la expresión regular /g (global), reemplaza todas las instancias.
console.log(texto_largo.replace(/los/g,'cinco'));


//  Métodos de cadenas de texto 2
    let input = 'eScorPIO';
    let db = "escorpio";

    //  toLowerCase() - toUpperCase()
    console.log(input.toLowerCase());
    console.log(input.toUpperCase());
    console.log(input.toLocaleLowerCase());
    console.log(input.toLowerCase() === db.toLowerCase());

    //  Formas de concatenar
    let str_1 = "Primera cadena";
    let str_2 = "Segunda cadena";

    console.log(str_1.concat(" ",str_2));
    console.log(str_1 + " " + str_2);
    console.log(`${str_1} ${str_2}`);

    //  Espacios 
    let str_3 = "          Espacios al final.          ";
    console.log(str_3.length);
    console.log(str_3.trim().length);
    console.log(str_3.trimStart.length);
    console.log(str_3.trimEnd.length);

