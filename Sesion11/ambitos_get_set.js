//  Ambito de clases, metodos.
//  Atributos public, private, protected
class Persona {
    //  Private => #
    //  Solo se puede acceder desde dentro de la clase.
    #nombre;
    #edad;
    #obtenEdad;
    _isDeveloper;

    //  Protected -> _
    //  Solo se puede acceder desde dentro de la clase y clases hijas.
    constructor(nombre, edad, isDeveloper) {
        this.#nombre = nombre;
        this.#edad = edad;
        this._isDeveloper = isDeveloper;
    }

    saludo() {
        console.log(`Hola ${this.nombre}`);
    }

    obtenNombre() {
        return this.#nombre;
    }

    #obtenEdad() {
        return this.#edad;
    }
    
    getEdad() {
        return this.#edad;
    }

    setEdad(age) {
        this.#edad = age;
    }
}

const pers = new Persona('Gorka',34,true);
console.log(pers);
console.log(pers.nombre);
pers.saludo();

//  console.log(pers.obtenNombre());
//  console.log(pers.#obtenEdad());
//  console.log(pers._isDeveloper);


//  Getters     :   Métodos que permiten obtener atributos/métodos private o protected.
const age = pers.getEdad();
console.log(age);

//  Setters     :   Métodos que permiten modificar atributos private o protected.
pers.setEdad(23);
console.log(pers.getEdad());
//  Acceso controlado