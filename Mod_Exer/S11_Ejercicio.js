class Estudiante {
    nombre;
    asignaturas = ['Javascript', 'HTML', 'CSS'];
    constructor(nombre) {
        this.nombre = nombre;
    };
    obtenDatos() {
        return {
            nombre: this.nombre,
            asignaturas: this.asignaturas
        }
    }
}

const new_student = new Estudiante('24Skyyg');
console.log(new_student.obtenDatos());