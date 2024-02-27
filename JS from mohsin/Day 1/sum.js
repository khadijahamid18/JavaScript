console.log(sumNumber(5));

function sumNumber(num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum = sum + i;  // 0 + 1 + 2 + 3 + 4 + 5 = 15
    }
    return sum;
}