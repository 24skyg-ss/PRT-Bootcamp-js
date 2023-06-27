//  Funciones asíncronas.
//  
function miAsinc() {
    //  Hace una llamada a una BBDD externa
    //  Puede darnos algún error.
}

//  Promesas
const miPromesa = new Promise((resolve, reject) => {
    // Sí esta todo correcto
    const i = Math.floor(Math.random() * 2);
    if (i !== 0) {
        resolve();
    } else {
        reject();
    }
})

miPromesa
    .then(() => console.log("Se ha ejecutado de forma correcta."))
    .catch(() => console.log("ERROR"))
    .finally(() => console.log("Yo me ejecuto siempre"))
    