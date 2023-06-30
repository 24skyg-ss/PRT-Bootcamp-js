//  POO
const persona = {
    nombre: 'Gorka',
    edad: 34,
    isDeveloper: true,
    saludo: function() {
        console.log('Hola');
    }
}
persona.saludo();

//  Function Factory
const creaPersona = (nombre,edad,isDeveloper) => {
    return {
        nombre,
        edad,
        isDeveloper,
        saludo: function() {
            console.log('Hola');
        }
    }
};

const nueva_persona = creaPersona('Juan',33,true);
console.log(nueva_persona);

//  Clases
