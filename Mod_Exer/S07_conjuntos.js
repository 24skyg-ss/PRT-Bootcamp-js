const family = ["Father", "Mother", "Brother_1", "Sister_1", "Sister_2", "Skygg"];
const setFamily = new Set(family);
console.log(setFamily);

setFamily.add('Skygg');
console.log(setFamily);

setFamily.add('Javascript');
console.log(setFamily);
//  Set { 'Father',  'Mother',  'Brother_1',  'Sister_1',  'Sister_2',  'Skygg',  'Javascript' }