/*
    1.  Crear un objeto vacío llamado dog
*/
let dog = {};

/*
    2.  Imprime el objeto dog en la consola
*/
console.log(dog);

/*
    3.  Añade las propiedades name, legs, color, age y bark para el objeto dog. 
    La propiedad bark es un método que devuelve woof woof
*/
dog = {
    name: 'Wofy',
    legs: 4,
    color: 'white',
    age: 5,
    bark: function() {
        return 'woof woof';
    }
};
console.log(dog);

/*
    4.  Obtener name, legs, color, age y el valor de bark del objeto dog
*/
console.log(`Dog ${dog.name}. Age ${dog.age} with ${dog.legs} legs. Color ${dog.color} and say ${dog.bark()}`);

/*
    5.  Establecer nuevas propiedades al objeto dog: breed, getDogInfo
*/
dog = {
    name: 'Wofy',
    legs: 4,
    color: 'white',
    age: 5,
    bark: function() {
        return 'woof woof';
    },
    breed: 'Dogge',
    getDogInfo: function() {
        return `Dog ${this.name}. Age ${this.age} with ${this.legs} legs. Color ${this.color} `;
    }
};
