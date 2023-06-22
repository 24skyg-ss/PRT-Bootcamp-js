let result = 10;
let val = result - 1;

while(result){
    result = result * val;
    val--;
    if(val <= 1) break;
}

console.log(`10!: ${result}`);
