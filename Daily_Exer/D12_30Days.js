//  EJERCICIOS NIVEL 1
/*
    1.  Calcula los ingresos anuales totales de la persona a partir del siguiente texto.
    'Gana 4000 euros de sueldo al mes, 10000 euros de bonificación anual, 5500 euros de
    cursos online al mes'.
*/
const txt = 'Gana 4000 euros de sueldo al mes, 10000 euros de bonificación anual, 5500 euros decursos online al mes';
const vals = txt.match(/\d+/g);
let annualIncome = ( vals[0] * 12 ) + ( vals[2] * 12 ) + vals[1] * 12;
console.log(`Ingresos anuales: $${annualIncome}`);

/*
    2.  La posición de algunas partículas en el eje horizontal x -12, -4, -3 y -1 en la
    dirección negativa, 0 en el origen, 4 y 8 en la dirección positiva. Extrae estos
    números y encuentra la distancia entre las dos partes más lejanas.
*/
const points = ["-1", "2", "-4", "-3", "-1", "0", "4", "8"];
const sortedPoints = [-4, -3, -1, -1, 0, 2, 4, 8];

function numsDistance(arr) {
    let vals = arr.map((elemt) => Number(elemt));
    let max = Math.max(...vals);
    let min = Math.min(...vals);
    return Math.abs(min) + Math.abs(max);
}
console.log(numsDistance(points));

//  EJERCICIOS NIVEL 2
/*  
    1.  Escriba una función llamada tenMostFrequentWords que obtenga las diez palabras
     más frecuentes de una cadena?

        function tenMostFrequentWords(paragraph) {
        paragraph.replace(/[^a-zA-Z0-9]/g, '');
        let txt = paragraph.split(" ");
        let rest = [];

        for (const elemt of txt) {
            let match = new RegExp("/"+elemt+"/g");
            let cont = 0;
            let vals = [].concat(paragraph.match(/love/g));
            cout = vals.length;
            let obj = { word: elemt, count: cont};
            if (!rest.includes(obj)) rest.push(obj);
        }

        return rest.sort((a,b) => a.count - b.count);
    }
*/


//  EJERCICIOS NIVEL 3
/*
    1.  Escribe una función que limpie el texto. Limpia el siguiente texto. Después de 
    la limpieza, cuente tres palabras más frecuentes en la cadena.
*/
function cleanText(str) {
    return str.replace(/[^a-zA-Z0-9 ]/g, '');
}

const sentence = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
console.log(cleanText(sentence));