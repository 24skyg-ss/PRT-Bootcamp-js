function ValidTelef (telef = '01234567') {
    if (telef.length === 8) return true;
    return false;
}
console.log(ValidTelef());


function asyncFunctiont() {
    return new Promise(res => {
        setTimeout(() => {
            console.log("Hola, soy una promesa.");
        },5000);
    });
}

asyncFunctiont();               //  Imprime "Hola, soy una promesa" 5 segundos después de ejecutarse.


function* generatorIndex() {
    let id = 0;
    while(true) {
        id+=2;
        if(id === 10) {
            return id;
        }
        yield id;           //  Esperar hasta que se vuelva a llamar.
    }
}
const gen = generatorIndex();
console.log(gen.next().value);  //  2
console.log(gen.next().value);  //  4
console.log(gen.next().value);  //  6
console.log(gen.next().value);  //  8
console.log(gen.next().value);  //  10
console.log(gen.next().value);  //  undefined
