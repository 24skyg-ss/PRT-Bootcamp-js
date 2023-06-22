
// Casos muy especificos - break, continues
let lista = [1,2,3,4,5,6];
var j = 50;

for(let i=0; i<lista.length;i++){

    if (lista[i]===3){
        continue;
    }

    console.log(lista[i]);

    if (lista[i] > 5){
        break;
    }
}


//  Cuál es el ambito de un bucle.
//  Se refiere al alcance que tienen las variables en la estructura.
//    console.log(i)
console.log(j);

//  labels - etiquetas
//  Nos permiten nombrar los continue y break.

let unidades = 0;
let decenas = 0;
bucleDecenas: while (true) {
    bucleUnidades: while(true){
        console.log(`El número actual es: ${decenas}${unidades}.`);
        unidades++;
            if(unidades===10){
                unidades = 0;
                break bucleUnidades;
            }
            if(decenas===2){
                break bucleDecenas;
            }
    }
    decenas++; 
}

console.log("Ya hemos terminado.");


