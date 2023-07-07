//  EJERCICIOS NIVEL 1
const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

/*
    1.  Lee la API de los países utilizando fetch e imprime el nombre del país, 
    la capital, los idiomas, la población y la superficie.
*/
fetch(countriesAPI)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.error(error));


//  EJERCICIOS NIVEL 2
/*
    1.  Imprime todos los nombres de los gatos en la variable catNames.
*/
const fetchDataCats = async () => {
    try {
        const response = await fetch(catsAPI);
        const cats = Object.values(await response.json());
        cats.forEach((elemt) => {
            let nameCat = elemt.name;
            console.log(nameCat);
        })
    } catch (err) {
        console.error(err);
    }
};
fetchDataCats();

//  EJERCICIOS NIVEL 3
/*
    1.  Lee el api de los gatos y encuentra el peso medio del gato en unidad métrica.
*/
const fecthCatsWeight = async () => {
    try {
        const response = await fetch(catsAPI);
        const cats = Object.values(await response.json());
        cats.forEach((elemt) => {
            let nameCat = elemt.name;
            let margen = (elemt.weight.metric).split("-");
            let weightMetric = (Number(margen[0]) + Number(margen[1])) / 2;
            console.log(`${nameCat} : ${weightMetric} Units Metric`);
        });
    } catch (err) {
        console.error(err);
    }
} 
fecthCatsWeight();

/*
    2.  Lee la api de países y descubre los 10 países más grandes
*/
const countriesTop10 = async () => {
    try {
        const response = await fetch(countriesAPI);
        const countries = await response.json();
        let countries10 = [];
        countries.sort((a,b) => b.population - a.population);

        countries.forEach((elemt) => {
            countries10.push(`${data[i].name} - Population: ${data[i].population}`);
        });

        countries10.length = 10;
        console.log(countries10);
    } catch (err) {
        console.error(err);
    }
} 
countriesTop10();
