//  EJERCICIOS NIVEL 1
/*
    1.  Mostrar la matriz de países como una tabla
*/
const countries_2 = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda',
    'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain',
    'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan'
]
console.table(countries_2);

/*
    2.  Mostrar el objeto países como una tabla
*/
const countries = [
    {
      name: 'Afghanistan',
      capital: 'Kabul',
      languages: ['Pashto', 'Uzbek', 'Turkmen'],
      population: 27657145,
      flag: 'https://restcountries.eu/data/afg.svg',
      currency: 'Afghan afghani'
    },
    {
      name: 'Åland Islands',
      capital: 'Mariehamn',
      languages: ['Swedish'],
      population: 28875,
      flag: 'https://restcountries.eu/data/ala.svg',
      currency: 'Euro'
    },
    {
      name: 'Albania',
      capital: 'Tirana',
      languages: ['Albanian'],
      population: 2886026,
      flag: 'https://restcountries.eu/data/alb.svg',
      currency: 'Albanian lek'
}]
console.table(countries);

/*
    3.  Utilice console.group() para agrupar los registros
*/
console.group("Countries_Names");
console.log(countries_2);
console.groupEnd("Countries_Names");

console.group("Countries_Info");
console.log(countries);
console.groupEnd("Countries_Info");

//  EJERCICIOS NIVEL 2
/*
    1.  10 > 2 * 10 use console.assert()
*/
console.assert( 10 > (2 * 10), "10 no es mayor que 20");

/*
    2.  Escribe un mensaje de advertencia utilizando console.warn()
*/
console.warn("Mensaje de advertencia.");

/*
    3.  Escribe un mensaje de error utilizando console.error()
*/
console.error("Mensaje de error.");


//  EJERCICIOS NIVEL 3
/*
    1.  Comprueba la diferencia de velocidad entre los siguientes bucles: 
    while, for, for of, forEach
*/
const countries_3 = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];


console.time("Velocidad while");
let cont = 0;
while(cont < countries_3.length) {
    console.log(countries_3[cont][0], countries_3[cont][1]);
    cont++;
}
console.timeEnd("Velocidad while");


console.time("Velocidad for regular");
for (let i = 0; i < countries_3.length; i++) {
  console.log(countries_3[i][0], countries_3[i][1]);
}
console.timeEnd("Velocidad for regular");


console.time("Velocidad for of");
for (const [name, city] of countries_3) {
  console.log(name, city);
}
console.timeEnd("Velocidad for of");


console.time("Velocidad forEach");
countries_3.forEach(([name, city]) => {
  console.log(name, city);
});
console.timeEnd("Velocidad forEach");
