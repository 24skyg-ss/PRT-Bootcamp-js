//  EJERCICIOS NIVEL 1

/*
    1.  Itera de 0 a 10 usando el bucle for, haga lo mismo usando los bucles while y do while
*/
for(let i = 0; i<10;i++){
    console.log(i+1);
}

let cont = 0;
while(cont < 10){
    console.log(cont+1)
    cont++;
}

let cont_2 = 0;
do {
    console.log(cont_2+1);
    cont_2++;
} while (cont_2 < 10)

/*
    2.  Itera 10 to 0 usando el bucle for, haga lo mismo usando los bucles while y do while
*/
for(let i = 10; i>0;i--){
    console.log(i);
}

let contb = 10;
while(contb > 0){
    console.log(contb);
    contb--;
}

let cont_2b = 10;
do {
    console.log(cont_2b);
    cont_2b--;
} while (cont_2b > 0)

/*
    3.  Itera de 0 a n usando el bucle for
*/
let n = prompt("Ingresa un número:");
for(let i = 0; i<n;i++){
    console.log(i+1);
}

/*
    4.  Escribe un bucle que haga el siguiente patrón usando console.log():
*/
let char = "#";
for(let i = 1; i < 8; i++){
    console.log(char.repeat(i));
}

/*
    5.  Usa un bucle para imprimir el siguiente patrón:
*/
for(let x = 0; x <= 10; x++){
    console.log(`${x} x ${x} = ${x*x}`);
}

/*
    6.  Usando un bucle imprime el siguiente patrón:
*/
console.log("i\ti^2\ti^3");
for(let i = 0; i <= 10; i++){
    console.log(`${i}\t${i**2}\t${i**3}`);
}

/*
    7.  Usa el bucle for para iterar de 0 a 100 e imprima solo números pares
*/
for(let i = 0;i<=100;i++){
    if (i%2==0) console.log(i);
}

/*  
    8.  Usa el bucle for para iterar de 0 a 100 e imprima solo números impares
*/
for(let i = 0;i<=100;i++){
    if (i%2==1) console.log(i);
}

/*
    9. Usa el bucle for para iterar de 0 a 100 e imprima la suma de todos los números.
*/
let sum = 0;
for(let i = 0; i <= 100;i++){
    sum+=i;
}
console.log(sum);

/*
    10. Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la 
    suma de todos los impares.
*/
let sumPares = 0;
let sumImpar = 0;
for(let i = 0; i <= 100;i++){
    if (i % 2 === 0 ){
        sumPares+=i;
    } else {
        sumImpar+=i;
    }
}
console.log(sumPares);
console.log(sumImpar);

/*
    11. Desarrolla un pequeño script que genera una matriz de 5 números aleatorios
*/
const RANGE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let pass = "";
for(let i = 0; i < 7; i++){
    pass += RANGE_CHAR.charAt(Math.floor(Math.random() * RANGE_CHAR.length));
}
console.log(pass);

/*
    12. Desarrolla un pequeño script que genera una matriz de 5 números aleatorios. 
    Los números debe ser únicos
*/
let arr_pass = [];
let pass_2 = "";
for(let i = 0; i < 7; i++){
    pass_2 += RANGE_CHAR.charAt(Math.floor(Math.random() * RANGE_CHAR.length));
}
if(arr_pass.includes(pass_2)===false){
    arr_pass.push(pass_2); 
    console.log(pass_2); 
} else {
    pass_2 = "";
    console.log("Clave no disponible.");
}


/*  
    13. Desarrolla un pequeño script que genera un id aleatorio de seis caracteres:
*/
let pass_3 = "";
for(let i = 0; i < 7; i++){
    pass_3 += RANGE_CHAR.charAt(Math.floor(Math.random() * RANGE_CHAR.length));
}
console.log(pass_3);




