//  Gestión de errores
const miFuncion = val => {
    if (typeof val === "number") {
        return 2 * val;
    }
    //return false;
    throw new Error("El valor debe ser de tipo number.");
}

//const elDoble = miFuncion('a');

const numero = '8';

try  {
    //  Código que puede fallar.
    console.log("Esta ejecutandose de manera correcta.");
    const doble = miFuncion(numero);
    console.log(doble);
} catch (e) {
    //  En caso de fallar, quiero que ejecutes.
    console.log("Error: ",e);
} finally {
    console.log('Esto se ejecutará tanto si se produce algún error.');
}

//  InternalError   : Error interno en el motor de JS
//  SyntaxisError   : Error de sintaxis
//  TypeError       : Tipo de dato inválido
//  RangeError      : Fuera del rango válido
//  ReferenceError  : Referencia no definida