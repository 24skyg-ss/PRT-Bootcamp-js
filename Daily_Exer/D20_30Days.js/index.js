//  EJERCICIOS NIVEL 1
const first_parr = document.querySelector("p");
console.log(first_parr);

const id_first = document.querySelector("#p-num1");
const id_second = document.querySelector("#p-num2");
const id_third = document.querySelector("#p-num3");
const id_fourth = document.querySelector("#p-num4");
console.log(id_first, id_second, id_third, id_fourth);

const allParrs = document.querySelectorAll(".parrafo");
allParrs.forEach(parr => {
    console.log(parr.innerText);
});

allParrs[3].textContent = "Fourth Paragraph";

//  EJERCICIOS NIVEL 2
allParrs.forEach((parrs,i) => {
    parrs.style.fontSize = "18px";
    if (i % 2 === 0) parrs.style.color = "green";
    else parrs.style.color = "red";
})
