//  EJERCICIOS NIVEL 1
/*
    1.  Guarda tu nombre, apellido, edad, país y ciudad en tu navegador 
    localStorage.
*/
localStorage.setItem("firstName","24Skygg");
localStorage.setItem("age",19);
localStorage.setItem("country","ER.");
localStorage.setItem("city","IM.");

//  EJERCICIOS NIVEL 2
/*
    1.  Cree un objeto estudiante. El objeto estudiante tendrá el nombre, el 
    apellido, la edad, las habilidades, el país, las claves inscritas y los valores 
    para las claves. Almacena el objeto estudiante en el localStorage de tu 
    navegador.
*/

const student = {
    firstName: "24Skygg",
    lastName: "Dor.",
    age: 19,
    skills: ['Javascript','HTML','CSS','SQL'],
    country: 'ER.',
    city: 'IM.'
}
localStorage.setItem("estudiante",JSON.stringify(student));


//  EJERCICIOS NIVEL 3
/*
    1.  Crear un objeto llamado personAccount. Tiene propiedades de nombre, apellido, 
    ingresos, gastos y tiene métodos totalIncome, totalExpense, accountInfo,addIncome, 
    addExpense y accountBalance. Los ingresos son un conjunto de ingresos y su 
    descripción y los gastos son también un conjunto de gastos y su descripción.  
*/
const personAccount = {
    firstName: "24Skygg",
    lastName: "Dor.",
    income: 2000,
    expenses: 1000,
    totalIncome: function() {
        return this.income;
    },
    totalExpense: function() {
        return this.expenses;
    },
    accountInfo: function() {
        return `FirstName: ${this.firstName} \nLastName: ${this.lastName}`;
    },
    addIncome: function(add) {
        this.income =+ add;
    }
};
localStorage.setItem("account", JSON.stringify(personAccount));
