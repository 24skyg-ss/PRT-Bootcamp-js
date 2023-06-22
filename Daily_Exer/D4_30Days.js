//  EJERCICIOS NIVEL 1

    /*
        1.  Obtenga la entrada del usuario usando el aviso ("Ingrese su edad:"). 
        Si el usuario tiene 18 años o más, muestre el mensaje: 
        'Tiene la edad suficiente para conducir', pero si no tiene 18 años, 
        brinde otro mensaje que indique que debe esperar la cantidad de años que 
        necesita para cumplir 18.  
    */
    let age = prompt("Ingrese su nombre:");
    if (age>=18){
        console.log(`Tiene la edad suficiente para conducir.`);
    } else {
        console.log(`Tienes ${age} años. Debes esperar ${18-age} para cumplir los 18.`);
    }

    /*
        2.  Compara los valores de myAge y yourAge usando if... else. Según la comparación, 
        registre el resultado en la consola indicando quién es mayor (tú o yo). 
        Utilice prompt(“Ingrese su edad:”) para obtener la edad como entrada.   
    */
    let myAge = prompt("Ingresa tu edad:");
    let yourAge = 19;
    if (myAge > yourAge) {
        console.log(`Eres ${myAge-yourAge} años mayor que yo.`);
    } else {
        console.log(`Eres ${yourAge-myAge} años menor que yo.`);
    }

    /*
        3.  Si a es mayor que b, devuelve 'a es mayor que b'; de lo contrario, 
        'a es menor que b'. Trate de implementarlo de maneras diferentes
        Usando if else
        operador ternario.   
    */
    let a = 5;
    let b = 4;

    if (a>b) console.log("a es mayor que b");
    else console.log("b es mayor que a");

    console.log(a>b ? `a es mayor que b` : `b es mayor que a`);

    /*
        4.  Los números pares son divisibles por 2 y el resto es cero. ¿Cómo verificar si 
        un número es par o no usando JavaScript?
    */
    let val = prompt("Ingrese un número");
    if (val % 2 == 0 ) {
        console.log(`${val} es un número par.`);
    } else {
        console.log(`${val} es un número impar.`);
    }

//  EJERCICIOS NIVEL 2

    /*
        1.  Escriba un código que pueda calificar a los estudiantes de acuerdo con sus puntajes:   
    */
    let notes = prompt("Ingrese la nota:");
    if (notes <= 100 && notes >= 80 ){
        console.log(`Tienes ${notes}. Calificación A`);
    } else if (notes <= 79 && notes >= 70 ){
        console.log(`Tienes ${notes}. Calificación B`);
    } else if (notes <= 69 && notes >= 60 ){
        console.log(`Tienes ${notes}. Calificación C`);
    } else if (notes <= 59 && notes >= 50 ){
        console.log(`Tienes ${notes}. Calificación D`);
    } else {
        console.log(`Tienes ${notes}. Calificación F`);
    }

    /*
        2. Consulta si la temporada es Otoño, Invierno, Primavera o Verano. 
        Si la entrada del usuario es :
    */
    let month = prompt("Ingrese el mes:");

    if (month==`Septiembre` || month==`Octubre`, month==`Noviembre`) {
        console.log(`Es otoño.`);
    } else if (month==`Diciembre` || month==`Enero` || month==`Febrero`) {
        console.log(`Es invierno.`);
    } else if (month==`Marzo` || month==`Abril` || month==`Mayo`) {
        console.log(`Es primavera.`);
    } else {
        console.log(`Es verano.`);
    }

    /*
        3.  Compruebe si un día es un día de fin de semana o un día laborable. 
        Su script tomará el día como entrada.   
    */
    let day = prompt("Ingresar día");
    if (day.toLowerCase()==`sábado` || day.toLowerCase()==`domingo`) {
        console.log(`El ${day.toLowerCase()} es fin de semana.`);
    } else {
        console.log(`El ${day.toLowerCase()} es un día favorable.`);
    }