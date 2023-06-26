const myPerson = {
    nombre: "24Skygg",
    apellido: "Dor.",
    edad: 19,
    altura: 1.71,
    eresDesarrollador: true
}

let ageMyPerson = myPerson.edad;
console.log(ageMyPerson);       //  19

const listPersons = [
    myPerson,
    { nombre: "Hyouru", apellido: "Ru.", edad: 20, altura: 1.80, eresDesarrollador: false },
    { nombre: "Cris", apellido: "Wo.", edad: 17, altura: 1.75, eresDesarrollador: false }
]
console.log(listPersons);

const listPersonaSort = listPersons.sort((a,b) => a.edad - b.edad);
console.log(listPersonaSort);