const hoy = new Date();
console.log(hoy);

const birthday = new Date(2003,11,6);
console.log(birthday.toLocaleDateString("en-US"));

const isMayor = hoy.getTime() > birthday.getTime();
console.log(isMayor);           //  true

const birthday_Month = birthday.getMonth() + 1;
console.log(birthday_Month);    //  12

const birthday_Year = birthday.getFullYear();
console.log(birthday_Year);     //  2003
