// Bifurcaciones IF-ELSE
let saldo = 50;
let efectivo = 20;

if (efectivo < saldo) {
    console.log("Puedes retirar dinero.");
}

if (efectivo < saldo) {
    console.log("Puedes retirar dinero.");
} else {
    console.log("Saldo insuficiente");
}

// IF ELSE + IF ELSE
let nota = 5;

if (nota === 5){
    console.log("Enhorabuena, has obtenido un sobresaliente.");
} else if (nota === 4) {
    console.log("Buen trabajo.");
} else if (nota === 3) {
    console.log("Suficiente.");
} else if (nota === 2) {
    console.log("No has aprobado.");
} else if (nota === 1) {
    console.log("Más trabajo en la proxima.");
} else {
    console.log("Error");
}

// SWITCH
switch(nota){
    case 5:
        console.log();
        break;
    case 4:
        console.log();
        break;
    case 3:
        console.log();
        break;
    case 2:
        console.log();
        break;
    case 1:
        console.log();
        break;
    default:
        console.log();
        break;
}