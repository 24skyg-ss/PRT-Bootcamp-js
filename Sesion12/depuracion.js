//  Depuración
//  Ejecución del codigo de manera controlada.

const Persona = {
    nombre: 'Gorka',
    edad: 34
}

console.log(Persona);

function obtenDobleEdad(edad) {
    return 2 * edad;
}

const dobleEdad = obtenDobleEdad(Persona.edad);

console.log(dobleEdad);

function obtenArray(edad) {
    let arrayNums = [];

    for (let i = 0; i < 10; i++) {
        const num = Persona.edad + i;
        console.log(num);
        arrayNums = [...arrayNums, num]
    }
}

const arr = obtenArray(Persona.edad);
console.log(arr);