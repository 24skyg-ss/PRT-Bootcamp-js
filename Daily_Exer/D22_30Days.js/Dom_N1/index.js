////////////////////////////////////////////////
let lista = document.querySelector(".lista");
let parr_Number;

for(let i = 0; i < 102 ; i++){
    parr_Number = document.createElement("p");
    parr_Number.className = "number";
    parr_Number.style.fontSize = "20px";
    parr_Number.style.fontFamily = "monospace";
    parr_Number.style.color = "white";
    parr_Number.textContent = i;

    lista.appendChild(parr_Number);
}

function isPrimeNumber(num) {
    if (num==0 || num==1 || num== 4) return false;
    for (let i = 2; i < num / 2; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const allNumbers = document.querySelectorAll(".number");

allNumbers.forEach(elem => {
    let num = elem.innerText;

    if (isPrimeNumber(num) == true) elem.style.backgroundColor = 'hsl(3, 97%, 65%)';
    else if (num % 2 === 1) elem.style.backgroundColor = 'hsl(49, 97%, 60%)';
    else if (num % 2 === 0) elem.style.backgroundColor = 'hsl(151, 70%, 43%)';
    else elem.style.backgroundColor = 'gray';
});