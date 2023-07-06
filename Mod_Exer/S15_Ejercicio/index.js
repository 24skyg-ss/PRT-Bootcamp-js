let FirstName = '24Skygg';
let LastName = 'Dor.';
const myPerson = {
    FirstName,
    LastName
}

console.log(myPerson);

/*
*/
sessionStorage.setItem("dev-javascript",myPerson);
localStorage.setItem("dev-js",myPerson);
document.cookie = "developer="+JSON.stringify(myPerson)+"; max-age=120" ;