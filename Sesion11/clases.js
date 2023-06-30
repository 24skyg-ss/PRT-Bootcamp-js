//  Clases
class persona {
    nombre;
    edad;
    isDeveloper;

    constructor(nombre, edad, isDeveloper) {
        this.nombre = nombre;
        this.edad = edad;
        this.isDeveloper = isDeveloper;
    }

    saludo() {
        console.log(`Hola ${this.nombre}`);
    }
}

const nueva_persona = new persona('Gorka',34,true);
console.log(nueva_persona);
nueva_persona.saludo();

let numero = 60;                                    //  Inicialización
let persona_2 = new persona('Javier',23,false);     //  Instancia
console.log(typeof persona_2);                      //  Object
console.log(persona_2 instanceof persona);          //  true