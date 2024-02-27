// //                                                        ADDING ELEMENTS


// const numbers = [1, 3, 5, 8];

// numbers.push(7);   // array k end pr num add hota
// numbers.unshift(4);  // array k star mn num add hota
// numbers.splice(2, 0, 'a', 'b');
// console.log(numbers);




// //                                                           FINDING ELEMENTS

// //                                                               PRIMITIVES


// const numbers = [1, 3, 5, 3,  8];
// console.log(numbers.indexOf(5));  // return index of 5 = 2
// console.log(numbers.indexOf(9));  // 2 does'nt exists so return -1
// console.log(numbers.lastIndexOf(3)); 

// console.log(numbers.includes(3));  // true bcz 3 is present
// console.log(numbers.includes(6));  // false bcz 6  not exist



// //                                                                REFERENCE TYPE


// const courses = [
//     {id : 1, name : 'a'},
//     {id : 2, name : 'b'},
// ];
// const course = courses.find(function (course) {
//     return course.name === 'a'; // if g then undefined
// });
// console.log(course);



// //                                                                  FIND INDEX


// const courses = [
//     {id : 1, name : 'a'},
//     {id : 2, name : 'b'},
// ];
// const course = courses.findIndex(function (course) {
//     return course.name === 'b'; // 1
// });
// console.log(course);



//                                                                    ARROW FUNCTION



// const courses = [
//     {id : 1, name : 'a'},
//     {id : 2, name : 'b'},
// ];
// const course = courses.findIndex (course => course.name === 'b');
// console.log(course);



// //                                                               REMOVING ELEMENTS


// const num = [1, 5, 7, 3, 4, 8, 2];

// console.log(num.pop());
// console.log(num.shift());
// console.log(num.splice(1));



// //                                                                EMPTYING AN ARRAY


// let num = [1, 4, 8, 5];
// // let neww = num;
// // neww = [];
// // console.log(neww);  // []
// num.length = 0;
// console.log(num);     // []



// //                                                           COMBINING AND SLICING AN ARRAY


// let first = [1, 4, 7, 6];
// let sec = [2, 5, 8];
// let combined = first.concat(sec);
// console.log(combined);

// let slice = combined.slice(2, 5);
// console.log(slice);


// let first = [{id : 10}];
// let sec = [2, 5, 8];
// let combined = first.concat(sec);
// first[0].id = 10;
// console.log(combined);

// let slice = combined.slice(2, 5);
// console.log(slice);





// //                                                             SPREAD OPERATOR



// const first = [1, 4, 7, 6];
// const sec = [2, 5, 8];

// const combined = [...first, 'a', ...sec, 'b'];

// const copy = [...combined];

// console.log(combined);
// console.log(copy);




//                                                              ITERATING AN ARRAY


// const num = [1, 3, 5, 7];

// for (let numb of num) {          // is mn 4 times print ho gi array
//     console.log(num);
// }
// // num.forEach(function (num) {       // is mn numbers next line mn chalay jain gy
// //     console.log(num);
// // });
// num.forEach(num => console.log(num));
// num.forEach((num, index) => console.log(index, num));




// //                                                           JOINING ARRAYS



// const num = [1, 2, 3, 4, 5];
// const joined = num.join('/');
// console.log(joined);

// const msg = `Hey it's Khadija`;
// const part = msg.split(' ');
// console.log(part);
// const combined = part.join('-');
// console.log(combined);



// //                                                            SORTING ARRAYS


// let num = [4, 7, 2, 3, 9];
// console.log(num.sort());
// console.log(num.reverse());



// //                                                               OBJECTS


// const courses = [
//     {id: 1, name : 'JavaScript'},
//     {id: 2, name : 'Node.js'},
// ];

// courses.sort(function (a, b) {

//     const nameA = a.name.toUpperCase();
//     const nameB = b.name.toUpperCase();

//    if (a.name < b.name) return -1;
//    if (a.name > b.name) return 1;
//    return 0;
// });
// console.log(courses);




// //                                                        TESTING ELEMENTS OF ARRAY


// // const num = [ 1, 2, 3, -2];
// // const allPositive = num.every(function(value) {
// //     return value >= 0;
// // });    
// // console.log(allPositive);


// const num = [ 1, 2, 3, -2];
// const allPositive = num.some(function(value) {
//     return value >= 0;
// });    
// console.log(allPositive);




// //                                                            FILTERING AN ARRAY


// const num = [ 1, 2, 3, -2];
// const filtered = num.filter(function(value) { 
//     return value >= 0;
// });    
// console.log(filtered); 
