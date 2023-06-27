//  Funciones generadoras
function* generarId() {
    let id = 0;
    while(true) {
        id++;
        if(id === 5) {
            return id;
        }
        yield id;           //  Esperar hasta que se vuelva a llamar.
    }
}

const gen = generarId();
console.log(gen.next().value);    //  { value: 1, done: false } 1
console.log(gen.next().value);    //  { value: 2, done: false } 2
console.log(gen.next().value);    //  { value: 3, done: false } 3
console.log(gen.next().value);    //  { value: 4, done: false } 4
console.log(gen.next().value);    //  { value: 5, done: true  } 5
