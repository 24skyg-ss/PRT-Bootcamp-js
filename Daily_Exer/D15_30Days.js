//  EJERCICIOS NIVEL 1
/*
    1.  Crea una clase de Animal. La clase tendrá propiedades de nombre, edad, color,
     piernas y creará diferentes métodos.
*/
class Animal {
    _nombre;
    _edad;
    _color;
    _piernas;

    constructor(nombre,edad,color,piernas) {
        this._nombre = nombre;
        this._edad = edad;
        this._color = color;
        this._piernas = piernas;
    }

    get getNombre(){
        return this._nombre;
    }

    get getEdad(){
        return this._edad;
    }

    get getColor(){
        return this._color;
    }

    get getPiernas() {
        return this._piernas;
    }

    set setNombre(nombre) {
        this._nombre = nombre;
    }

    set setEdad(edad) {
        this._edad = edad;
    }

    set setColor(color) {
        this._color = color;
    }
}

/*
    2.  Cree una clase hijo de Perro y Gato a partir de la Clase Animal.
*/

class Perro extends Animal {
    clasificacion;
    raza;
    constructor(nombre,edad,color,piernas,raza) {
        super(nombre,edad,color,piernas);
        this.raza = raza;
        this.clasificacion = 'Canino';
    }

    get getRaza() {
        return this.raza;        
    }

    get getClasif() {
        return this.clasificacion;
    }
}

class Gato extends Animal {
    clasificacion;
    raza;
    constructor(nombre,edad,color,piernas,raza) {
        super(nombre,edad,color,piernas);
        this.raza = raza;
        this.clasificacion = 'Felino';
    }

    get getRaza() {
        return this.raza;        
    }

    get getClasif() {
        return this.clasificacion;
    }
}