const boton = document.getElementById("#bttn")

boton.addEventListener("click", () => {
    console.log("click")
    alert("Click en el botón")
})

$(() => {
    $(".bttn").click(() => {
        console.log("Hola, estoy utilizando JQuery.");
    })
})