function secuenceFibonacci(num) {
    const rest = [0,1];
    for (let i =2; i <= num; i++) {
        rest[i] = rest[i - 1] + rest[i - 2];
    }
    return rest;
}

let arr = secuenceFibonacci(6);
console.log(arr);