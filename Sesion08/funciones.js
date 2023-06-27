//  Funciones

saludar("Skygg");
saludar();

function saludar(name = 'Javascript'){
    console.log("Hola " + name);
}

function despedir(name = 'Javascript'){
    console.log("Adios " + name);
}

despedir();
despedir("Skygg");

//////////////////////////////////

let persona = { nombre: "Juan", apellido: "Gonzales"};

function saludarPersona(obj){
    obj.apellido = "Villar";
    console.log(` Hola, ${obj.nombre} ${obj.apellido}`);
}

saludarPersona(persona);
//  Hola, Juan Villar

//////////////////////////////////

function imprimir(...parametros){
    console.log(parametros);
}

imprimir(1,2,3,4,'Hola',true,null, undefined);
//  [ 1, 2, 3, 4, 'Hola', true, null, undefined ]

//////////////////////////////////

function sum(...vals){
    console.log(vals.reduce((a,b) => a + b));
}

sum(1,2,3,4,5,6);

