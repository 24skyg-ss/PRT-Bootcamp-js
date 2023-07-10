const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");

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

const papelera = document.querySelector(".papelera");

papelera.addEventListener("dragover", event => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
})

papelera.addEventListener("drop", event => {
    const parr = event.dataTransfer.getData("id");
    document.getElementById(parr).remove();
})