
// Data types
// Premetives -> Value types -> Number, string, boolean, undefined, null
// Reference -> Object types -> Arrays, functions, objects

// premetives

// let age = 21;
// let name = "Mohsin shoaib";
// let student = true;

// let lastName;

// console.log(typeof age);
// console.log(typeof name);
// console.log(typeof student);

// Object types

// let arr = [1, 2, 3, 4, 5, "Stirng", true, undefined, [1, 2, 3, 4]];
// console.log(arr);
// console.log(arr[2]);

// let arr = [1, 2, 3, 4];
// let arr2 = arr;

// arr2[2] = 50;

// console.log(arr);

// Function declaration / Function expression / Arrow function / IIFES

// function sayHello() {
//   return "Hello world";
// }

// console.log(sayHello());

// function checkEven(number) {
//   return number % 2 == 0;
// }

// console.log(checkEven(3));

// Truthy / Falsy values

// Falsy values => 0 , false , undefined, null, "";

// let studentsData = {
//   ali: 1,
//   mohsin: 2,
//   shoaib: 3,
//   ahsin: 4,
// };

// Dot notation

// console.log(studentsData.mohsin);

// Bracket notation

// console.log(studentsData["mohsin"]);

// Type conversion -> Changing the data type from one to another

// let number = 1234;

// console.log(typeof number);

// number = number.toString();

// console.log(typeof number);

// let name = "Mohsin";

// name = Number(name);

// console.log(typeof name);

// Difference between let var and const

// ES-5 , ES-6, ES-7 .......... ES => Ecmascript

// Allowed

// var name = "Mohsin";
// var name = "Shoaib";

// Not allowed

// let name = 'mohsin';
// let name  = 'shaoib';

// Allowed

// console.log(name);
// var name = "Mohsin";

// Not allowed

// console.log(name);
// let name = "Mohsin";

// Var declaration are functioned scoped
// Let , const declaration are blocked scoped

// function diff() {
//   if (true) {
//     let name = "Mohsin";
//   }

//   console.log(name);
// }

// diff();

// Math object

// console.log(Math.PI);

// console.log(Math.round(2.5));

// console.log(Math.ceil(2.5));

// console.log(Math.floor(2.5));

// console.log(Math.ceil(Math.random() * 11));

// console.log(Math.pow(2, 2));

// console.log(Math.abs(-3));

// Difference between == and ===

// == (loose equality operator)
// === (strict equality operator)

// Type coersion

// console.log("18" === 18);

// loops for while do-while

// for(let i = 0; i < 5; i++) {
//     console.log(i);
// }

// let i = 0;
// while(i < 5) {
//     console.log(i);
//     i++
// }

// do {

//     let i = 0;

// }while(i < 5);

// switch cases

// let name = "Mohsin";
// switch (name) {
//   case "Mohsin":
//     console.log("Hello");
//     break;
//   case "Shoaib":
//     console.log(name);
//     break;
//   default:
//     console.log("Value not matched");
// }

function numberGessing() {
  let random = Math.ceil(Math.random() * 11);

  let turns = 3;

  let number;

  do {
    number = Number(prompt("Enter a number between 0-10"));
    if (number < random) {
      console.log("Too less!");
      turns = turns - 1;
      console.log(turns);
    } else if (number > random) {
      console.log("Too High!");
      turns = turns - 1;
      console.log(turns);
    }
  } while (number !== random || turns !== 0);

  if (turns === 0) {
    console.log("You lost the game");
    console.log(random);
  } else {
    console.log("You won");
    console.log(random);
  }
}

numberGessing();