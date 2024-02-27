// function validatePalin(str) {

//     // get the total length of the words
//     const len = string.length;

//     // Use for loop to divide the words into 2 half
//     for (let i = 0; i < len / 2; i++) {

//         // validate the first and last characters are same
//         if (string[i] !== string[len - 1 - i]) {   // len -1 means length se 1 kam or -i means last se check krna
//             // string[i] start se dekhna str[len - 1- i] last se check krna 1 or last, 2 or 2ndLast and so on... 
//             alert('It is not a palindrome');   // Alert shows the msg on console
//         }
//     }
//     alert('It is a palindrome');
// }
// accept the string or number from the prompt, Prompt is for user input
// const string = prompt('Enter a string or number: ');
// const value = validatePalin(string);

var str = prompt("Please enter the string: ");
var len = str.length;
var msg = "It is a Palindrome";
for (let i = 0; i < len / 2; i++) {
    if (str[i] != str[len - 1 - i])  {
        msg = 'It is not a palindrome';
    }
}
console.log(`${str} : ${msg}`);  // $ se {} is mn jo likha hota wo as it is print hota 



// EXAMPLE of $

// let user = 'Bob'
// console.log(`We love ${user}.`); // We love Bob