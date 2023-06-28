//  Librerías Node & NPM
//  Conjunto de utilidades para el desarrollo de proyectos.

//  Instalación de Axios para servicios externos.
import axios from "axios";

axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(function (response) {
        // handle success
        console.log('Success!!!');
        console.log(response.data);
    })
    .catch(function (error) {
        // handle success
        console.log(`Error: ${error}`);
    })