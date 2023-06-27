/*  
    1.  Declare una función fullName e imprima su nombre completo.
*/
function fullName(name = 'Javascript') {
    return `Fullname: ${name}`;
}
console.log(fullName('24Skygg'));

/*
    2.  Declare una función fullName y ahora toma firstName, lastName como 
    parámetro y retorna su nombre completo.
*/
function fullName(firstName = 'Javascript', lastName = 'Developer') {
    return `${firstName} ${lastName}.`;
}
console.log(fullName('Skygg','Dor.'));

/*
    3.  Declare una función addNumbers que toma dos parámetros y retorna la 
    suma de ambos.
*/
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(1,2));

/*
    4.  El área de un rectángulo se calcula de la siguiente manera: area = length 
    x width. Escribe una función areaOfRectangle que calcule el área de un 
    rectángulo.
*/
function areaOfRectangle(length,width) {
    return length * width;
}
console.log(areaOfRectangle(2,5));

/*
    5.  El perímetro de un rectángulo se calcula de la siguiente manera: 
    perimeter= 2x(length + width). Escribe una función perimeterOfRectangle 
    que calcule el perímetro de un rectángulo.
*/
function perimeterOfRectangle(length,width) {
    return (length + width) * 2;
}
console.log(perimeterOfRectangle(2,5));

/*
    6.  El volumen de un prisma rectangular se calcula de la siguiente manera: 
    volume = length x width x height. Escribe una función volumeOfRectPrism 
    que calcule el volumen de un prisma.
*/
function volumeOfRectPrism(length,width,height) {
    return length * width * height;
}
console.log(volumeOfRectPrism(1,2,3));

/*  
    7.  El área de un círculo se calcula de la siguiente manera: 
    area = π x r x r. Escribe una función areaOfCircle que calcule el área de 
    un círculo.
*/
function areaOfCircle(radio) {
    return Math.PI * (radio**2);
}
console.log(areaOfCircle(4));

/*
    8.  La circunferencia de un círculo se calcula de la siguiente manera: 
    circumference = 2πr. Escribe una función circumOfCircle que calcule la c
    ircunferencia de un círculo.
*/
function circumOfCircle(radio){
    return (Math.PI * radio) * 2;
}
console.log(circumOfCircle(3));

/*  
    9.  La densidad de una sustancia se calcula de la siguiente manera:
    density= mass/volume. Escribe una función density que calcule la densidad d
    e una sustancia.
*/
function density(mass,volume) {
    return mass/volume;
}
console.log(density(10,2));

/*
    10. La velocidad se calcula dividiendo el total de la distancia recorrida 
    por un objeto en movimiento entre el tiempo total. Escribe una función que 
    calcule la velocidad de un objeto en movimiento, speed.
*/
function Movement(time,meters) {
    return meters / time;
}
console.log(Movement(10,4));

/*
    11. El peso de una sustancia se calcula de la siguiente manera: 
    weight = mass x gravity. Escribe una función weight que calcule el 
    peso de una sustancia.
*/
function weight(mass,gravity = 9.8) {
    return mass * gravity;
}
console.log(weight(15));

/*
    12. La temperatura en °C se puede convertir a °F usando esta fórmula: 
    °F = (°C x 9/5) + 32. Escribe una función convertCelsiusToFahrenheit que 
    convierta °C a °F.
*/
function convertCelsiusToFahrenheit(celcius) {
    return ((celcius * 9)/5) + 32;
}
console.log(convertCelsiusToFahrenheit(40));

/*
    13. El índice de masa corporal (IMC) se calcula de la siguiente manera: 
    imc = peso en Kg / (altura x altura) en m2. Escribe una función que calcule 
    imc. El IMC se utiliza para definir de forma amplia diferentes grupos de peso 
    en adultos de 20 años o más. Compruebe si una persona tiene un peso bajo, peso 
    normal, con sobrepeso u obeso según la información que se proporciona a 
    continuación.
*/
function IMC(weight,height) {
    let mic = weight / (height*height) ;

    if (mic >= 30) return `Obeso - ${mic}`;
    else if (mic < 30 && mic >= 25) return `Sobrepeso - ${mic}`;
    else if (mic < 25 && mic >= 18.5) return `Peso normal - ${mic}`;
    else return `Peso bajo - ${mic}`;
}
console.log(IMC(70,170));

/*
    14. Escribe una función llamada checkSeason, toma un parámetro de mes y 
    retorna la estación: Otoño, Invierno, Primavera o Verano.
*/
function checkSeason(month) {
    if (month==`Septiembre` || month==`Octubre`, month==`Noviembre`) {
        console.log(`Es otoño.`);
    } else if (month==`Diciembre` || month==`Enero` || month==`Febrero`) {
        console.log(`Es invierno.`);
    } else if (month==`Marzo` || month==`Abril` || month==`Mayo`) {
        console.log(`Es primavera.`);
    } else {
        console.log(`Es verano.`);
    }
}
checkSeason("Septiembre");

/*
    15. Math.max retorna su argumento más grande. Escriba una función findMax 
    que tome tres argumentos y devuelva su máximo sin usar el método Math.max.
*/
function findMax(arg1,arg2,arg3) {
    return Math.max(arg1,arg2,arg3);
}
console.log(findMax(1,2,3));

