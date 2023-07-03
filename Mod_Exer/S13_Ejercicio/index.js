let firstName = '24skyg-ss';
let lastName = 'Doro.';
let estudiante = firstName.concat(' ', lastName);
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
let length_estudiante = estudiante.length;
let charAt_firstName = firstName.charAt(0);
let charAt_lastName = lastName.charAt(lastName.length-2);
let trim_estudiante = estudiante.trim();
let isContent_estudiante = estudiante.includes(firstName);

console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(length_estudiante);
console.log(charAt_lastName);
console.log(trim_estudiante);
console.log(charAt_firstName);
console.log(isContent_estudiante);