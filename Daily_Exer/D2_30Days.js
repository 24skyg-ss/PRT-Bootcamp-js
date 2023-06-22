// EJERCICIO NIVEL 1:

    /*
        1.  Declare una variable llamada desafío y asígnele un valor inicial 
        '30 días de JavaScript'
    */
    let desafío = '30 días de JavaScript';

    /*
        2.  Imprima la cadena en la consola del navegador usando console.log()  
    */
    console.log(desafío);

    /*
        3.  Imprima la longitud de la cadena en la consola del navegador usando
        console.log()
    */
    console.log(desafío.length);

    /*
        4.  Cambie todos los caracteres de cadena a letras mayusculas usando
        el método toUpperCase()  
    */
    console.log(desafío.toUpperCase());

    /*
        5.  Cambie todos los caracteres de cadena a letras minusculas usando
        el método toLowerCase()  
    */
    console.log(desafío.toLowerCase());

    /*
        6.  Corta (segmenta) la primera palabra de la cadena usando el método 
        substr() o substring()
    */
    console.log(desafío.substr(3,4));

    /*
        7.  Corta la frase "días de JavaScript" de "30 días de JavaScript"  
    */
    console.log(desafío.substr(3,sub.length));

    /*
        8.  Verifique si la cadena contiene una palabra Script usando el 
        método includes()
    */
    console.log(desafío.includes("Script"));

    /*
        9.  Divide la cadena en un array usando el método spli()
    */
    console.log(desafío.split());
    
    /*
        10. Divida la cadena de 30 días de JavaScript en el espacio usando el método split()
    */
    console.log(desafío.split(" "));

    /*
        11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' divide la 
        cadena en la coma y cámbiala a una matriz.
    */
    let apps = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
    console.log(apps.split(","));

    /*
        12. Cambie 30 días de JavaScript a 30 días de Python usando el 
        método replace().
    */
    console.log(desafío.replace("JavaScript","Python"));

    /*
        13. ¿Qué es el carácter en el índice 15 en la cadena '30 días 
        de JavaScript'? Utilice el método charAt().
    */
    console.log(desafío.charAt(15));

    /* 
        14. ¿Cuál es el código de carácter de J en la cadena '30 días 
        de JavaScript' usando charCodeAt()
    */
    console.log(desafío.charCodeAt(11)); 
    
    /*
        15. Use indexOf para determinar la posición de la primera 
        aparición de a en 30 días de JavaScript
    */
    console.log(desafío.indexOf("a"));
    
    /*
        16. Utilice lastIndexOf para determinar la posición de la última 
        aparición de a en 30 días de JavaScript.
    */
    console.log(desafío.lastIndexOf("a"));

    /*
        17. Usa indexOf para encontrar la posición de la primera aparición 
        de la palabra porque en la siguiente oración:'No puedes terminar 
        una oración con porque porque porque es una conjunción'
    */
    let oracion = 'No puedes terminar una oración con porque porque porque es una conjunción';
    console.log(oracion.indexOf("porque"));

    /*  
        18. Usa lastIndexOf para encontrar la posición de la última 
        aparición de la palabra porque en la siguiente oración:'No puedes 
        terminar una oración con porque porque porque es una conjunción'
    */
    console.log(oracion.lastIndexOf("porque"));

    /*
        19. Usa buscar para encontrar la posición de la primera aparición
        de la palabra porque en la siguiente oración:'No puedes terminar
        una oración con porque porque porque es una conjunción'
    */
    console.log(oracion.search("porque"));

    /*
        20. Use trim() para eliminar cualquier espacio en blanco final al
        principio y al final de una cadena. Por ejemplo, '30 días de 
        JavaScript'.
    */
    console.log(desafío.trim(" "));

    /*
        21. Use el método startsWith() con la cadena 30 días de JavaScript 
        y haga que el resultado sea verdadero
    */
    console.log(desafío.startsWith("30"));

    /*
        22. Use el método endsWith() con la cadena 30 días de JavaScript y 
        haga que el resultado sea verdadero
    */
    console.log(desafío.endsWith("Script"));

    /*
        23. Usa el método match() para encontrar todos los a en 30 días de 
        JavaScript
    */
    let met = /a/g 
    console.log(desafío.match(met));

    /*
        24. Use concat() y fusione '30 días de' y 'JavaScript' en una sola 
        cadena, '30 días de JavaScript'
    */
    let part1 = '30 días de'
    let part2 = 'JavaScript'
    console.log(part1.concat(" ", part2));

    /*
        25. Use el método repeat() para imprimir 30 días de JavaScript 
        2 veces
    */
    console.log(desafío.repeat(2));

//  EJERCICIOS NIVEL 2

    /*
        1.  Usando console.log() imprima la siguiente declaración:
    */
    let citeA = 'There is no exercise better for the heart than reaching down and lifting people up.';
    let autor = 'John Holmes';
    console.log(`The quote '${citeA}' by ${autor} teaches us to help one another`);

    /*
        2. Usando console.log() imprima la siguiente cita de la Madre Teresa.
    */
    let citeB = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
    console.log(citeB);

    /*
        3. Compruebe si typof '10' es exactamente igual a 10. Si no, hágalo exactamente igual.
    */
    let valor = '10';
    console.log(typeof valor == 10 ? true : Number(valor));

    /*
        4. Compruebe si parseFloat('9.8') es igual a 10, si no, hágalo exactamente igual a 10.
    */
    console.log(parseFloat(9.8) === 10 ? true : 10);

    /*
        5.  Verifique si 'on' se encuentra tanto en Python como en la jerga
    */
    console.log("Python".includes("on"));
    
    /*
        6.  Espero que este curso no esté lleno de jerga. Compruebe si jargon está en la oración.
    */
    console.log("Espero que este curso no esté lleno de jerga".includes("jargon"));
    
    /*
        7.  Genere un número aleatorio entre 0 y 100 inclusive.
    */
    console.log(Math.floor(Math.random() * (100-50) + 50));
    
    /*
        8.  Genere un número aleatorio entre 50 y 100 inclusive.
    */
    console.log(Math.floor(Math.random() * (100-50) + 50));
    
    /*  
        9. Genere un número aleatorio entre 0 y 255 inclusive.
    */
    console.log(Math.floor(Math.random() * 255));

    /*
        10. Acceda a los caracteres de la cadena 'JavaScript' utilizando un número aleatorio.
    */

    /*
        11. Use console.log() y caracteres de escape para imprimir el siguiente patrón.
    */
    console.log("1\t1\t1\t1\t1");
    console.log("2\t1\t2\t4\t8");
    console.log("3\t1\t3\t9\t27");
    console.log("4\t1\t4\t16\t64");
    console.log("5\t1\t5\t25\t125");

    /*
        12. Use substr para separar la frase porque porque porque de la siguiente
        oración:
        `No puedes terminar una oración con porque porque porque es una conjunción`
    */
    console.log(oracion.substr(oracion.search("porque"),(oracion.lastIndexOf("ue")-oracion.search("porque")) +2));

//  EJERCICIOS NIVEL 3

    /*
        1. 'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos 
        todavía están buscando su amor. Cuente el número de palabras amor en esta oración.
    */
    let text = 'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor'
    console.log(text.match(/amor/gi).length);

    /*
        2.  Usa match() para contar el número de todos los porque en la siguiente oración:
        'No puedes terminar una oración con porque porque porque es una conjunción'
    */
    console.log(oracion.match(/porque/gi).length);

    /*
        3.  Limpia el siguiente texto y encuentra la palabra más frecuente (pista, usa replace 
        y expresiones regulares).
    */
    const sentence = "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
    console.log(sentence.replace(/[^a-zA-Z0-9 ]/g, ''));

    /*
        4.  Calcula el ingreso anual total de la persona extrayendo los números del siguiente 
        texto. 'Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en 
        línea de 15000 euros por mes.'
    */
    let test = 'Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en  línea de 15000 euros por mes.'
    console.log(test.match(/\d+/g));
    