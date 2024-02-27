// let num = [1, 2, 3, 4];  // // array 
// console.log(num.reverse());

let num = 1234;
let newNum = 0; 
newNum = reverseNum(num);
console.log(newNum);

function reverseNum(n) {
    while (n > 0) { 
        rightmost = n % 10;
        newNum = newNum * 10 + rightmost; 
        n = Math.floor(n / 10);   // Math.floor is used to round off the answer
    }
    return newNum;
}
 

// let number = 123456789;

// // Initializing the result variable 
// let result = 0; 

// while(number>0){
//     // Getting the rightmost digit
//     rightmost = number%10; 
    
//     result = result*10 + rightmost;
    
//     // Removing the rightmost digit from the number
//     number = Math.floor(number/10);
// }
// console.log("Reversed number is : " + result)
