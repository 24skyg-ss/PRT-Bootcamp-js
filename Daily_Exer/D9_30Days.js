//  EJERCICIOS NIVEL 1

const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

/*
    1.  Explique la diferencia entre forEach, map, filter, and reduce.
    forEach :   Itera los elementos del array.
    map     :   Itera y modifica los elementos del array.
    filter  :   Filtra los elementos que cumplen una condición y retorna un array. 
    reduce  :   Retorna un valor único a partir de un array.
*/

/*
    2.  Defina una función callback antes de utilizarla en forEach, map, 
    filter o reduce.
    Rpta: Función que pasa dentro de otra función, y luego se lo llama dentro de 
    esa función para realizar una tarea.
*/

/*
    3.  Utiliza forEach para mostrar con console.log cada país del array de países.
*/
countries.forEach((element) => console.log(element));

/*
    4.  Utiliza forEach para mostrar con console.log cada nombre del array de nombres.
*/
names.forEach((element) => console.log(element));

/*
    5.  Utiliza forEach para mostrar con console.log cada número del array de números.
*/
numbers.forEach((num) => console.log(num));

/*
    6.  Utiliza map para crear un nuevo array cambiando cada país a mayúsculas en el 
    array de países.
*/
const countriesUpper = countries.map((element) => element.toUpperCase());
console.log(countriesUpper);

/*
    7.  Utilice map para crear un array de longitudes de países a partir del array 
    de países.
*/
const countriesNameLength = countries.map((element) => element.length);
console.log(countriesNameLength);

/*
    8.  Usa map para crear un nuevo array cambiando cada número al cuadrado en el 
    array de números.
*/
const numberSquare = numbers.map((num) => num**2);
console.log(numberSquare);

/*
    9.  Utilice map para cambiar cada nombre a mayúsculas en el array de nombres.
*/
const nameUpperCase = names.map((str) => str.toUpperCase());
console.log(nameUpperCase);

/*
    10. Utilice map para asignar el array de productos a sus correspondientes 
    precios.
*/
const priceProducts = products.map((prod) => prod.price);
console.log(priceProducts);

/*
    11. Utilice filter para filtrar los países que contienen land.
*/
const countriesFilterland = countries.filter((c) => c.includes('land'));
console.log(countriesFilterland);

/*
    12. Utilice filter para filtrar los países que tienen seis caracteres.
*/
const countriesFilterLength = countries.filter((c) => c.length > 6);
console.log(countriesFilterLength);

/*
    13. Utilice filter para filtrar los países que contengan seis letras o
    más en el array de países.
*/
const countriesFilterLength_2 = countries.filter((c) => c.length >= 6);
console.log(countriesFilterLength_2);

/*
    14. Utilice filter para filtrar los países que empiezan por "E";
*/
const countriesStartsWith = countries.filter((c) => c.startsWith('E'));
console.log(countriesStartsWith);

/*
    15. Utilice filter para filtrar sólo los precios con valores.
*/
const priceProducts_2 = products.map((prod) => Number(prod.price));
console.log(priceProducts_2);

/*
    16. Declara una función llamada getStringLists que toma un array como
    parámetro y devuelve un array sólo con elementos string.
*/
function getStringLists(arr) {
    return arr.filter((element) => typeof element === 'string');
}
const arr = [213,2131,'1','123',null];
const arr_2 = getStringLists(arr);
console.log(arr_2);

/*
    17. Usa reduce para sumar todos los números del array de números.
*/
let sum = numbers.reduce((acc,cur) => acc + cur);
console.log(sum);

/*
    18. Utiliza reduce para concatenar todos los países y producir esta 
    frase: 
    Estonia, Finland, Sweden, Denmark, Norway, y IceLand son países del 
    norte de Europa
*/
let concatCountries = countries.reduce((string,element) => string + ', ' + element) + 
'son países del norte de Europa';
console.log(concatCountries);

/*
    19. Explique la diferencia entre some y every
    some    :   Comprueba si ALGUNO de los elementos cumple la condición. (true OR false = true)
    every   :   Comprueba si TODOS los elementos cumplen la condición. (true AND false = false)
*/

/*
    20. Utilice some para comprobar si la longitud de algunos nombres es superior a 
    siete en el array de nombres.
*/
const isLengthMayor = names.some((val) => val.length > 7);
console.log(isLengthMayor);

/*
    21. Utilice every para comprobar si todos los países contienen la palabra land.
*/
const countriesContainsland = countries.every((c) => c.includes('land'));
console.log(countriesContainsland);

/*
    22. Explique la diferencia entre find y findIndex.
    find        :   Retorna el primer elemento que cumple la condición.
    findIndex   :   Retorna la posición del primer elemento que cumple la condición.  
*/

/*
    23. Utilice find para encontrar el primer país que contenga sólo seis letras en 
    el array de países.
*/
const findCountries = countries.find((c) => c.length > 6);
console.log(findCountries);

/*
    24. Utilice findIndex para encontrar la posición del primer país que contenga 
    sólo seis letras en el array de países.
*/
const findIndexCountries = countries.findIndex((c) => c.length === 6);
console.log(findIndexCountries);

/*
    25. Utilice findIndex para encontrar la posición de Norway si no existe en el 
    array obtendrá -1.
*/
const findCountry = countries.findIndex((c) => c === 'Norway');
console.log(findCountry);

/*
    26. Utilice findIndex para encontrar la posición de Russia si no existe en el 
    array obtendrá -1.
*/
const findCountry_2 = countries.findIndex((c) => c === 'Russia');
console.log(findCountry_2);



//  EJERCICIO NIVEL 2

/*
    1.  Encuentre el precio total de los productos encadenando dos o más iteradores de 
    matrices (por ejemplo, arr.map(callback).filter(callback).reduce(callback)).
*/
const priceProductsIterative = products
    .map((prod) => Number(prod.price))
    .filter((prod) => prod > 0)
    .reduce((acc,cur) => acc + cur);

console.log(priceProductsIterative);

/*
    2.  Encuentre la suma del precio de los productos usando sólo reduce(callback)).
*/
const priceProds = products.reduce((acc, cur) => Number(acc.price) + Number(cur.price));
console.log(priceProds);

/*
    3.  Declara una función llamada categorizeCountries que retorna un array de países 
    que tienen algún patrón común (encuentras el array de países en este repositorio 
    como countries.js(ej 'land', 'ia', 'island','stan')).
*/
const countries_2 = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda',
    'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain',
    'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia',
    'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso',
    'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Republic',
    'Chad', 'Chile', 'China', 'Colombi', 'Comoros', 'Congo (Brazzaville)', 'Congo',
    'Costa Rica', "Cote d'Ivoire", 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic',
    'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor (Timor Timur)',
    'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 
    'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia, The', 'Georgia', 
    'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 
    'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 
    'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 
    'Kenya', 'Kiribati', 'Korea, North', 'Korea, South', 'Kuwait', 'Kyrgyzstan', 'Laos', 
    'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 
    'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 
    'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 
    'Moldova', 'Monaco', 'Mongolia', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 
    'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 
    'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 
    'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 
    'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent', 'Samoa', 'San Marino', 
    'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia and Montenegro', 
    'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 
    'Solomon Islands', 'Somalia', 'South Africa', 'Spain', 'Sri Lanka', 'Sudan', 
    'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 
    'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 
    'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 
    'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 
    'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
]
function categorizeCountries(arr,str = 'land') {
    return arr.filter((c) => c.includes(str));
}
const new_arr = categorizeCountries(countries_2,'ia');
console.log(new_arr);

/*
    4.  Cree una función que retorne un array de objetos, que es la letra y el número 
    de veces que la letra usa para empezar el nombre de un país.
*/
function startsWithCountrie(arr,str='a') {
    return arr.filter((c) => c.startsWith(str));
}
const startsCountries = startsWithCountrie(countries_2,'V');
console.log(startsCountries);

/*
    5.  Declara una función getFirstTenCountries y retorna un array de diez países. 
    Utiliza diferente programación funcional para trabajar en el array countries.js.
*/
function getFirstTenCountries(arr) {
    return arr.filter((ele,index) => {if (index < 10) return ele});
}
const firstCountries = getFirstTenCountries(countries_2);
console.log(firstCountries);

/*
    6.  Declara una función getLastTenCountries que devuelve los últimos diez países 
    del array de países.
*/
function getLastTenCountries(arr) {
    return arr.filter((ele,index) => {if (index > arr.length - 11) return ele});
}
const lastCountries = getLastTenCountries(countries_2);
console.log(lastCountries);

/*
    7.  Encuentre qué letra se utiliza muchas veces como inicial de un nombre de país 
    del array de países (ej. Finland, Fiji, France etc)
*/
const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function countsStarts(arr) {
    const a_str = str.split('');
    let char = '';
    let Max = 0;
    
    for(let i=0;i<a_str.length; i++){
        let count = 0;

        arr.forEach(element => {
            if (element.startsWith(a_str[i])) count ++;
        });

        if (count >= Max) {
            char = a_str[i];
            Max = count;
        };
    };

    return `${char}: ${Max}`;
}
let rpta = countsStarts(countries_2);
console.log(rpta);

