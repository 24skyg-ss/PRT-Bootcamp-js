let listCompra = ['Carne','Huevos','Leche','Manzanas','Miel','Yogurt'];

listCompra.push('Aceite de Girasol');
console.log(listCompra);

listCompra.pop();
console.log(listCompra);

const listMovies = [
    { title: "Pelicula 1 - Adam", director: "Pers Miles", date: '2012-01-12'},
    { title: "Pelicula 2 - Lilith", director: "Tarath", date: '2009-09-04'},
    { title: "Pelicula 3 - Lux", director: "Lans Clock", date: '2005-04-25'}
];

const newList2010 = listMovies.filter(movie => movie.date > '2010-01-01');
console.log(newList2010);

const newListDirector = listMovies.map(mov => mov.director);
console.log(newListDirector);

const newListMovieTitle = listMovies.map(mov => mov.title);
console.log(newListMovieTitle);

const newListConcat = newListDirector.concat(newListMovieTitle);
console.log(newListConcat);

const newListConcatFactor = newListDirector.concat(...newListMovieTitle);
console.log(newListConcatFactor);