const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");
const papelera = document.querySelectorAll(".img-paperbin");
console.log(parrafos);


parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        // console.log("Inicio de arrastre");
        console.log("Estoy arrastrando el párrafo: " + parrafo.innerText);
        parrafo.classList.add("dragging");
        event.dataTransfer.setData("id", parrafo.id);
    })

    parrafo.addEventListener("dragend", () => {
        // console.log("Fin de arrastre.");
        parrafo.classList.remove("dragging");
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "copy"; // copy, none, link, move 
        // console.log("Drag Over");
    })

    seccion.addEventListener("drop", event => {
        // console.log("Drop");
        const id_parrafo = event.dataTransfer.getData("id");
        console.log("Párrafo ID: ",id_parrafo);
        const parraf = document.getElementById(id_parrafo);
        seccion.appendChild(parraf);
    })
})

papelera.forEach(parrafo => {
    parrafo.addEventListener("ondrop", event => {
        const parr = document.getElementById(event.dataTransfer.getData("id"));
        parr.parentNode.removeChild(parr);
        console.log(`Párrafo ${parr} eliminado.`);
    })
})
