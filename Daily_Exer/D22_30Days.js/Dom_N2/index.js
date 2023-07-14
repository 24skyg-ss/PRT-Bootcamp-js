////////////////////////////////////////////////

/*
    import { countries } from 'data.js';
    const countriesAPI = "https://restcountries.com/v2/all";

    const fetchDataCountries = async () => {
        try {
            const response = await fetch(countriesAPI);
            const cont = Object.values(await response.json());
            const names = [];
            cont.forEach((elemt) => {
                let nameCountrie = elemt.name;
                names.push(nameCountrie);
            })
            return names;
        } catch (err) {
            console.error(err);
        }
    };

    const countries = fetchDataCountries();
*/

//const paises = Object.assign({},countries);
const paises = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];

const title = document.querySelector('h3'); 
title.textContent = 'Total Number of countries: ' + paises.length;

let lista = document.querySelector(".lista");
let terr;

for(let i = 0; i < paises.length ; i++){
    terr = document.createElement("p");
    terr.className = "countrie";
    terr.style.fontSize = "15px";
    terr.style.fontFamily = "monospace";
    terr.textContent = paises[i];

    lista.appendChild(terr);
}
