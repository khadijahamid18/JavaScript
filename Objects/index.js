// //                                                    OBJECTS


// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVariable: true,
//     draw: function () {
//         console.log('Draw');
//     }
// };
// circle.draw();




// //                                              DYNAMIC NATURE OF OBJECTS


// const circle = {
//     radius : 1
// }
// circle.color = 'Yellow';
// circle.draw = function() {} 
// //delete circle.color;
// console.log(circle);




// //                                                        VALUE


// let x = 10;
// let y = x;
// x = 20;
// console.log(x);   // 20
// console.log(y);   // 10




// //                                                       OBJECTS 


// let x = {value : 10}; 
// let y = x;
// x.value = 20;
// console.log(x);  // 20
// console.log(y);  // 20




// //                                                       PRIMITIVE


// let num = 10;
// function inc(num) {
//     num++;
// }
// inc(num);
// console.log(num);  // 10 bcz function ka scope sirf us mn hy




// //                                                       REFERENCE


// let object = {value : 10};
// function inc(object) {
//     object.value++;
// }
// inc(object);
// console.log(object);  // 11



//  MATH AND STRING FUNCTIONS OF JAVA SCRIPT FROM GOOGLE












// //                                                 FUNCTIONS ARE OBJECTS 


// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log('Draw');
//     }
// }

// // const Circle1 = new Function('radius', `
// //     this.radius = radius;
// //     this.draw = function() {
// //         console.log('Draw');
// //     }
// // `);

// // const circle = new Circle(1);

// // const another = new Circle(1);

// Circle.call({}, 1);
// Circle.apply({}, [1, 2, 3]);

