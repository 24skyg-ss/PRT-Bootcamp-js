const hTexto = document.getElementById("h-texto");
console.log(hTexto);

hTexto.addEventListener("cambioTexto", event => {
    console.log(event.detail)
    hTexto.innerText = event.detail.texto
    hTexto.style.color = event.detail.color
});

function cambiarTexto(nuevoTexto,color) {
    const evento = new CustomEvent("cambioTexto", {
        detail: {
            texto: nuevoTexto,
            color
        }
    })
    hTexto.dispatchEvent(evento)
} 