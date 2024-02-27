// //                                               IF ELSE


// let hours = 10;
// if (hours >= 6 && hours < 12) {
//     console.log('Good Morning');
// }
// else if (hours >= 12 && hours < 18) {
//     console.log('Good Afternoon')
// }
// else console.log('Good Evening');



// //                                              SWITCH CASE


// let role = 'guest';
// switch (role) {
//     case 'guest':
//         console.log('Guest User');
//         break;
//     case 'moderator':
//         console.log('Moderate User');
//         break;

//     default:
//         console.log('Unknown User');
//         // break;
// }


// let role = 'guest';
// if (role === 'guest') {
//     console.log('Guest User');
// }
// else if (role === 'moderator') {
//     console.log('Moderate User');
// }
// else console.log('Unknown User');



//                                                 
// for (let i = 0; i < 5; i++) {
//     console.log('Hello World', i);
// }

// for (let i = 0; i <= 5; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     };
// }

// for (let i = 5; i >= 1; i--) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     };
// }


//                                                  for...in


// const object = {
//     name : 'Khadija',
//     age : '19'
// };

// for (const key in object) {
//     console.log(key);  // name age
// }
// for (const key in object) {
//     console.log(key, object[key]);  // name khadija  age 19
// }



//


// for (let i = 0; i <= 5; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     };
// }
// let i = 0;
// while (i <= 5) {
//     if (i % 2 === 0) {
//         console.log(i);
//         i++;
//     }
// }



// const object = {
//     name: 'Khadija',
//     age: '19'
// };                       // key for objects 
// for (let key in object) {
//     console.log(key, object[key]);  // name khadija  age 19
// }

// const colors = ['red', 'blue', 'green'];      // index for array

// for (let index in colors) {
//     console.log(index);   
// }
// for (let index in colors) {
//     console.log(index, colors[index]);   
// }



//                                             MAX OF 2 NUMBERS


let number = max(3, 8)
console.log(number);

// function max(a, b) {
//     if(a > b) return a;
//     return b;
// }

function max(a, b) {
    return (a > b) ? a : b;
}

