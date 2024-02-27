//  //                                  ARITHMETIC OPERATORS


//  let x = 10;
//  let y = 3;
//  console.log(x + y);
//  console.log(x ** y);   // x to the power of y
// //  INCREMENT 
// // console.log(x);
// // console.log(++x);
// // console.log(x++);
// //  DECREMENT
// console.log(--x);
// console.log(x--);



// //                                    ASSIGNMENT OPERATORS


// let x = 5;
// x = x + 1;
// // x++;
// console.log(x);
// x += 5; // x = x + 5;
// console.log(x);
// x *= 3; // x = x * 3;
// console.log(x);



// //                                      COMPARISON OPERATORS


// let x = 1;
// console.log(x > 0);
// console.log(x === 1);
// console.log(x == 0);
// console.log(x !== 1);



// //                                         EQUALITY OPERATORS

// console.log(1 === 1);
// console.log(1 == 1);

// console.log(1 === 2);
// console.log(1 == 2);

// console.log(2 === 1);
// console.log(2 == 1);



// //                                        TERNARY / CONDTIONAL OPERATOR

// let points = 110;
// let type = points > 100 ? 'gold' : 'silver';
// console.log(type);
// // agar condition true hy to ? k bad wali print ho ni to : k bad wali



// //                                               LOGICAL OPERATORS


// let a = true;
// let b = false;
// let c = a && b;
// console.log(c);  // false

// let d = !c;
// console.log(d);  // true



// //                                                   BITWISE OPERATOR

// console.log(1 | 2);
// console.log(1 & 3);
// // 1 = 00000001
// // 2 = 00000010
// // 3 = 00000011



// //                                                     OPERATOR PRECEDENCE


// let x = 3 + 5 * 2;
// console.log(x); // 13

// let y = (3 + 5) * 2;
// console.log(y); // 16




// //                                                           SWAPPING VALUES


// let a = 'red';
// let b = 'blue';
// let c = a;
// a = b;
// b = c;
// console.log(a);  // blue
// console.log(b);  // red


// let x = 4;
// let y = 8;
// if (x > y)
//     console.log(x);
// else if (y > x)
//     console.log(y);

function max(x, y) {
    if (x > y)
        console.log(x);
    else if (y > x) 
        console.log(y);
}
console.log(max(2,5));