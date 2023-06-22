//  EJERCICIOS NIVEL 1

//  1.  Declare las siguientes variables; firstName, lastName, country, city, age, isMarries, year y asignar un valor, use el operador typeof para verificar diferentes tipos de datos.
    let firstName = 'Name', lastName = 'Last', country = 'EEUU', city = 'New York', age = 19, isMarried = false, year = new Date().getFullYear();
    console.log(typeof firstName);
    console.log(typeof lastName);
    console.log(typeof country);
    console.log(typeof city);
    console.log(typeof age);
    console.log(typeof isMarried);
    console.log(typeof year);

//  2.  Verifique si typeof '10' es igual a 10
    console.log('10'=== 10);

//  3.  Verifique si parseInt('9.8') es igual a 10
    console.log(parseInt('9.8' === 10));

//  4.  Verifique cualquier valor booleano true o false.
    console.log(true && true && true);
    console.log(true && true && false);

//  5. Calcule primero el resultado de la siguiente expresión de comparación sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()
    4 > 3   //  true
    4 >= 3  //  true
    4 < 3   //  false
    4 <= 4  //  false
    4 == 4  //  true
    4 === 4 //  true
    4 != 4  //  false
    4 !== 4 //  false
    4 != '4'//  true
    4 == '4'//  false
    4 ==='4'//  false
    "Python".length < "jargon".length   //  false

//  6.  Calcule primero el resultado de la siguiente expresión de comparación sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()
    4 > 3 && 10 < 12    //  true
    4 > 3 && 10 > 12    //  false
    4 > 3 || 10 < 12    //  true
    4 > 3 || 10 > 12    //  true
    !(4 > 3)            //  false
    !(4 < 3)            //  true
    !(false)            //  true
    !(4 > 3 && 10 < 12) //  false
    !(4 > 3 && 10 > 12) //  true
    !(4 === '4')        //  true
    !("Python".includes('on') && "dragon".includes('on'))

//  7. Utilice el objeto Date para realizar las siguientes actividades.
//  ¿Qué año es hoy?
    const year1 = new Date().getFullYear();

//  ¿Qué mes es hoy con un número?
    const month = new Date().getMonKth() + 1;

//  ¿Qué fecha es hoy?
    const now = new Date().getDate();

//  ¿Qué día es hoy con un número?
    const day = new Date().getDay();

//  ¿Cuál es la hora actual?
    const hour = new Date().getHours();

//  ¿Cuántos minutos hay actualmente?
    const minutes = new Date().getMinutes();

//  Averigüe el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora.
    const allSeconds = Date.now();

//  EJERCICIOS NIVEL 2

//  1.  Escriba un script que solicite al usuario que ingrese la base y la altura del triángulo y calcule el área de un triángulo (área = 0,5 x b x h).
    let base = prompt("Ingrese la base: ");
    let altura = prompt("Ingrese la altura: ");
    console.log(`El área del triángulo es: ${base*altura}`);

//  2.  Escriba un script que solicite al usuario que ingrese el lado a, el lado b y el lado c del triángulo y calcule el perímetro del triángulo (perímetro = a + b + c)
    let a = prompt("Lado A:");
    let b = prompt("Lado B:");
    let c = prompt("Lado C:");
    console.log(`El área del triángulo es: ${a+b+c}`);

//  3.  Obtenga el largo y el ancho usando prompt y calcule el área del rectángulo (área = largo x ancho y el perímetro del rectángulo (perímetro = 2 x (largo + ancho))
    let largo = prompt("Ingrese largo: ");
    let ancho = prompt("Ingrese ancho: ");
    console.log(`El área del rectangulo es: ${largo*ancho}`);
    console.log(`El perimetro del rectangulo es: ${ 2 * (largo*ancho)}`);

//  4.  Obtenga el radio usando prompt y calcule el área de un círculo (área = pi x r x r).
    let radio = prompt("Ingrese RADIO: ");
    console.log(`El área del circulo es: ${largo*ancho}`);

//  5.  Escriba un script con prompt que solicite al usuario que ingrese las horas y la tarifa 
//  por hora. ¿Calcular el salario de la persona?
    let horas = prompt("Horas trabajadas:");
    let sal = prompt("Salario por hora:");
    console.log(`El salario es: ${sal*horas}`);

//  6. Si la longitud de su nombre es mayor que 7, diga que su nombre es largo; de lo contrario, diga que su nombre es corto.
    let name = prompt("Ingrese su nombre:");
    console.log(name.length > 7 ? "Nombre demasiado largo" : name);

//  7. Compare la longitud de su nombre y la longitud de su apellido y debería obtener este resultado.
    let first = "Asabeneh";
    let last = "Yetayeh";
    console.log(`Tu primer nombre, ${first}, es más largo que tu apellido, ${last}`);

//  8. Declare dos variables myAge y yourAge y asignarles los valores iniciales y myAge y yourAge.
    let myAge = 250;
    let yourAge = 25;
    console.log(`Soy ${myAge-yourAge} años mayor que tú.`);

//  9. Usando prompt, obtenga el año en que nació el usuario y, si el usuario tiene 18 años o más, permita que el usuario conduzca, si no dígale que espere una cierta cantidad de años.
    let userBirthday = prompt("Año de nacimiento:");
    let anyo = new Date().getFullYear();
    console.log((anyo-userBirthday)>18 ? 
        `Tienes ${anyo-userBirthday} años. Tienes la edad suficiente para conducir.` : 
        `Tienes ${anyo-userBirthday} años. Podrás conducir después de ${18-(anyo-userBirthday)}`);

//  10. Cree un formato de hora legible por humanos usando el objeto Date.
    let date = new Date()
    let dayD = `${(date.getDate())}`.padStart(2,'0');
    let monthD = `${(date.getMonth()+1)}`.padStart(2,'0');
    let yearD = date.getFullYear();
    console.log(`${dayD}-${monthD}-${yearD}`)