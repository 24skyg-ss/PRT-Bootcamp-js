////////////////////////////////////////////////

const allList = document.querySelectorAll("li");

allList.forEach((parr) => {
    let textHTML = parr.innerText;
    if(textHTML.includes("próximamente")) parr.style.backgroundColor = "red";
    else if(textHTML.includes("en curso")) parr.style.backgroundColor = "yellow";
    else if(textHTML.includes("Realizado")) parr.style.backgroundColor = "green";
    else parr.style.backgroundColor = "gray";
})

function getRandomNumber(maxNum) {
    return Math.floor(Math.random() * maxNum);
}

function getRandomColor() {
    const h = getRandomNumber(360);
    const s = getRandomNumber(100);
    const l = getRandomNumber(100);

    return `hsl(${h}, ${s}%, ${l}%)`;
}

function generateRandomCode() {
    var myRandomColor = getRandomColor();
    return myRandomColor;
}

function setFontColor() {
    const randomColor = generateRandomCode();
    document.getElementById("year").style.color = randomColor;
    document.getElementById("year").style.fontSize = "60px";
}

setInterval(setFontColor,1000);



