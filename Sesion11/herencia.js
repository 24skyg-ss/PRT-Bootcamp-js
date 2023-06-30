//  Herencia    -   Inheritance
class Persona {
    _nombre;
    _edad;
    constructor(nombre, edad) {
        this._nombre = nombre;
        this._edad = edad;
    }
    
    saludo() {
        console.log(`Hola ${this._nombre}`);
    }
}

class Developer extends Persona {
    constructor(nombre,edad,leng) {
        super(nombre,edad);
        this.leng = leng;
    }
    //  Clase derivada de persona.
    
    //  Polimorfismo
    saludo() {              //  Override
        super.saludo();     //  Acceder al método de la clase padre.
        console.log('Desarrollador JavaScript');
    }
}

const dev = new Developer('Gorka',34,'JavaScript');
dev.saludo();