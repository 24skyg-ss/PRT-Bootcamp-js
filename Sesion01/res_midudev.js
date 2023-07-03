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

function minAndMaxWord(words) {
    let max = Math.max(...words);
    let min = Math.min(...words);
    let indexMax = words.indexOf(max);
    let indexMin = words.indexOf(min);
    return [indexMin,indexMax];
}

function createObject(name, subs) {
    let obj = {
      name: name,
      subscribers: subs,
      hash: (name.length * subs),
      getStatus: function() {
        return `El canal de ${name} tiene ${subs} suscriptores`
      }
    }
    return obj;
  }

  function getKeysOfBooleanValues(obj) {
    let vals = Object.entries(obj);
    let rest = [];
    vals.forEach((entry) => {
      const prop = entry[0];
      const val = entry[1];
      if (typeof val === 'boolean') rest.push(prop);
    })
    return rest;
  }