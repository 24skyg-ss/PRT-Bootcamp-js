//  Modulos
export function suma(a,b){
    return a + b;
}

export function mult(a,b) {
    return a * b;
}

export function eleva(a,b) {
    return a ** b;
}

export function factorial(a) {
    let factorial = 1;
    for(let i = 1; i <= a; i ++) {
        factorial *= i;
    }
    return factorial;
}
console.log(factorial(5));

export const name = "24Skygg";