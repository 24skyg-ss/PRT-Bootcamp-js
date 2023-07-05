const boton = document.querySelector("#btn")

boton.addEventListener("click", () => {
    console.log("click")
    //  Metodo windows de alerta
    //  alert("Se ha hecho click")

    //  Metodo windows de confirmacion
    confirm("¿Estás de acuerdo?")
        ? console.log("OK") 
        : console.log("NO!!")
    //  Imprime OK si se confirma (true) y NO en caso contrario (false)

    /*
        .-  Forma alternativa para confirmacion
        const rtpa = confirm("¿Seguro?")
        if (rpta) console.log("Estás de acuerdo")
        else console.log("No estñas de acuerdo")
    */
})

const botonInfo = document.querySelector("#info")
botonInfo.addEventListener("click", () => {
    const nombre = prompt("¿Cuál es tu nombre?")
    if (nombre) console.log("Bienvenido " + nombre)
    else console.log("No has introducido nada.")
})

const lista = [{
    nombre: "Gorka",
    edad: 34
}, {
    nombre: "Julen",
    edad: 21
}, {
    nombre: "Amaia",
    edad: 30
}]

//  console.log(lista)
console.table(lista)