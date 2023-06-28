
//  Modulos
function suma(a,b){
    return a + b;
}

function mult(a,b) {
    return a * b;
}

function eleva(a,b) {
    return a ** b;
}

function factorial(a) {
    let factorial = 1;
    for(let i = 1; i <= a; i ++) {
        factorial *= i;
    }
    return factorial;
}
console.log(factorial(5));

module.exports = {
    suma,
    mult,
    eleva,
    factorial
};

