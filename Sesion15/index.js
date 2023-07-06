//  Guardar tipo de datos primitivos
localStorage.setItem("nombre","Gorka");
localStorage.setItem("nombre","Miguel");

console.log(localStorage.getItem("nombre"));

//  Convertirlo a formato String
localStorage.setItem("persona", JSON.stringify({ nombre: "Gorka", edad: 32}));

//  Obtenerlo en formato objeto
console.log(JSON.parse(localStorage.getItem("persona")));

//  JSON.stringify  -> Convierte un objeto/array en un string
//  JSON.parse      -> Convierte un objeto/array convertido por stringify a ub objeto/array JS

localStorage.removeItem("nombre"); 

sessionStorage.setItem("nombre-sesion","Gorka");

/*  Cookies  */
document.cookie = "NombreCookie=GorkaCookie";
//  Darle caducidad
document.cookie = "NombreCookie=GorkaCookie;expires=" + new Date(2024,0,1).toUTCString();

console.log(document.cookie);
