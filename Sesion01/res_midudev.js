// RESOLUCIÓN Curso midudev
function acabanEnA(words){
    return words.every(str => str.endsWith('a'));;
}

let fn = ['ase','taza','casa'];
acabanEnA(fn);

function sortAbsoluteNumbers(numbers) {
    let vals = [...numbers];
    return vals.sort((a,b) => Math.abs(a) - Math.abs(b));
}

function buscaPalabras(words, word) {
    let leng = words.findIndex(str => str === word);
    let chars = words.filter(str => str.length > leng);
    return chars; 
}