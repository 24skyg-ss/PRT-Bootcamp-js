//  FOR
    for(let i = 0; i < 10; i++){
        console.log(i);
    }

    let lista = [1,4,6,2,3,7,10,12,800];
    for(let i = 0; i < lista.length; i++){
        console.log(lista[i]);
    }

    //  FOR-OF
    for (const valor of lista) {
        console.log(valor);
    }

    //  FOR-Each
    lista.forEach(valor => {
        console.log(valor);
    });

    //  FOR-IN
    let person = {
        nombre: "Gorka",
        apellido: "Villar",
        edad: 34,
        isDeveloper: true
    }

    console.log(person.nombre);

    let prop = "edad";
    console.log(person[prop]);

    for (const propiedad in person) {
        console.log(propiedad);         //  Imprime el atributo (nombre)
        console.log(person[propiedad]); //  Imprime el valor del atributo.
    }
    