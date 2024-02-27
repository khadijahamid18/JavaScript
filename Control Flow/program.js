// //                                                  IS LANDSCAPE


// console.log(islandscape(800,400));

// function islandscape(width, height) {
//     return (width > height);
// }



// //                                                     FIZZBUZZ


// const output = fizzBuzz(15);
// console.log(output);

// function fizzBuzz(input) {
//     if (typeof input !== 'number') {
//         return 'Not a number';
//     }
//     if ((input % 3 === 0) && (input % 5 === 0)) {
//         return 'FizzBuzz';
//     }
//     if (input % 3 === 0)  {
//         return 'Fizz';
//     }
//     if (input % 5 === 0) {
//         return 'Buzz';
//     }
//     return input; // else
// }




// //                                                     CHECK SPEED


// checkSpeed(120)

// function checkSpeed(speed) {
//     const speedLimit = 70;
//     const kmPerPoint = 5;
//     if (speed < speedLimit + kmPerPoint) {
//         console.log('OK');
//     }
//     else 
//     {const points = Math.floor((speed - speedLimit) / kmPerPoint);
//     if (points >= 12) 
//         console.log('License Suspended');
//     else 
//     console.log('Points', points);
//    }
// }




// //                                                     EVEN / ODD


// showNumbers(10)

// function showNumbers(limit) {
//     for (let i = 0; i <= limit; i++) {
//         if (i % 2 === 0) {
//             console.log(i, 'EVEN');
//         }
//         else
//         console.log(i, 'ODD');
//     }
// }

// showNumbers(10)

// function showNumbers(limit) {
//     for (let i = 0; i <= limit; i++) {
//         const msg = (i % 2 === 0) ? 'EVEN' : 'ODD';
//         console.log(i, msg);
//     }
// }




// //                                                         COUNT TRUTHY


// const array = [0, undefined, null, 1, 3, 6];
// console.log(countTruthy(array));

// function countTruthy(array) {
//     let count = 0;
//     for (let value of array) {
//         if (value) {
//             count++;
//         }
//     }
//     return count;
// }




// //                                                           PRINT STRING


// const movie = {
//     name: 'Pathaan',
//     year: 2023,
//     actor: 'SRK',
//     rating: 4.5
// };
// showProperties(movie);

// function showProperties(movie) {
//     for (let key in movie) {
//         if (typeof movie[key] === 'string') {
//             console.log(key, movie[key]);
//         }
//     }
// }




// //                                                      SUM OF 3 & 5 multiples


// console.log(sum(10));

// function sum(limit) {      // 3 = 3, 6, 9
//     let sum = 0;           // 5 = 5, 10        3+6+9+5+10 = 33
//     for (let i = 0; i <= limit; i++) {
//         if ((i % 3 === 0) || (i % 5 === 0)) {
//             sum += i;
//         }
//     }
//     return sum;
// }




//                                                           CALCULATE GRADES


// const marks = [80, 50, 70];
// console.log(calculateGrades(marks));

// function calculateGrades(marks) {
//     let sum = 0;
//     for (let mark of marks) {
//         sum += marks;
//     }
//     let average = sum / marks.length;

//     if (marks < 60) return 'F';
//     if (marks < 70) return 'D';
//     if (marks < 80) return 'C';
//     if (marks < 90) return 'B';
//     return 'A';
// }

// const marks = [30, 10, 20];
// console.log(calculateGrades(marks));

// function calculateGrades(marks) {
// const average = calculateAverage(marks);

//     if (marks < 60) return 'F';
//     if (marks < 70) return 'D';
//     if (marks < 80) return 'C';
//     if (marks < 90) return 'B';
//     return 'A';
// }
// function calculateAverage(array) {
//     let sum = 0;
//     for (let value of array) {
//         sum += value;
//     }
//     return sum / array.length;
// }




// //                                                 SHOW STARS


// showStars(20);

// function showStars(rows) {
//     for (let row = 1; row < rows; row++) {
//         let pattern = '';
//         for (let col = 0; col < row; col++) {
//             pattern += ' * ';
//         }
//         console.log(pattern);
//     }
// }




//                                                  SHOW PRIMES


// showPrime(10);

// function showPrime(limit) {
//     for (let i = 2; i <= limit; i++) {
//         let isPrime = true;
//         for (let j = 2; j < i; j++) {
//             if (i % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) console.log(i);
//     }
// }


showPrime(10);

function showPrime(limit) {
    for (let i = 2; i <= limit; i++) 
        if (isPrime(i)) console.log(i);
}

function isPrime(i) {
    for (let j = 2; j < i; j++) { 
        if (i % j === 0) {
            return false;
        }
    }
    return true;
}




