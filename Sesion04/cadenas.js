
// Sesión 4 : Strings (cadenas de caracteres)
    let str_sng = 'Texto con comillas simples';
    let str_dbl = "Texto con comillas dobles";

    console.log(str_sng);
    console.log(str_dbl);

    let str_comillas = "El otro día me dijo literalmente \" ve a sacar la basura\"";
    let str_comillas_simples = 'El otro día me dijo literalmente "ve a sacar la basura"';
    let str_comillas_dobles = "El otro día me dijo literalmente 've a sacar la basura'";
    let str_comillas_simples_2 = 'El otro día me dijo literalmente \' ve a sacar la basura\''; 

    console.log(str_comillas);
    console.log(str_comillas_simples);
    console.log(str_comillas_dobles);

    /// Comillas invertids (backticks)
    let str_backticks = `String con backticks.`;
    let nombre = "Iñigo";
    let saludo = `Hola, ${nombre} bienvenido.`;
    console.log(saludo);

    // Plantillas HTML
    let plantilla = `
    <html>
        <h1>Pagina web de ${nombre}</h1>
        <p>Este es un párrafo</p>
    </html>
    `;
    console.log(plantilla);

    // Introducción de variables en html
    let libros = ["Empieza por el por qué","El monje que vendió su Ferrari", "El poder del ahora"];
