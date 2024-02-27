// // Math.round, Math.max, Math.min

// // String.lenth


// let str = 'This is Khadija' + ' Hamid';
// console.log(str);



//                                          TEMPLATE LITERAL

// let msg = `this is
// dija`;
// console.log(msg);


// const name = 'John';
// const msg =
// `Hi ${name} ${2+6}

// Thankyou for joining

// regards`;
// console.log(msg);



// //                                               DATE


// const now = new Date();
// console.log(Date()); // current date






//                                                EXCERSICE


// //                                           ADDRESS OBJECT

// let address = {
//     street: 'a',
//     city: 'b',
//     code: 4
// }
// function showAddress(address) {
//     for (let key in address) {
//         console.log(key, address[key]);
//     }
// }
// showAddress(address);



// //                                              FACTORY FUNCTION


// let add = aaddress('a', 'b', 1);
// console.log(add);

// function aaddress(street, city, code) {
//     return {
//         street,
//         city,
//         code
//     };
// }




// //                                               CONSTRUCTOR FUNCTION


// let add = new Address('a', 'b', 1);
// console.log(add);

// function Address(street, city, code) {
//     this.street = street;
//     this.city = city;
//     this.code = code;
// }




// //                                                    IS SAME / IS EQUAL


// let add1 = new Address('a', 'b', 1);
// let add2 = new Address('a', 'b', 1);
// let add3 = add1;

// console.log(areEqual(add1));
// console.log(areSame(add1, add2));
// console.log(areSame(add1, add3));

// function Address(street, city, code) {
//     this.street = street;
//     this.city = city;
//     this.code = code;
// }

// function areEqual(add1, add2) {
//     return add1 === add2;
// }

// function areSame(add1, add2) {
//     return add1.street === add2.street &&
//         add1.city === add2.city &&
//         add1.code === add2.code
// }




// //                                                          POST A BLOG


// let post = {
//     title: 'a',
//     author: 'b',
//     body: 'c',
//     biews: 10,
//     comments: [
//         { author: 'a', body: 'b' },
//         { author: 'c', body: 'd' },
//     ],
//     islive: true
// };
// console.log(post);



// //                                                          CONSTRUCTOR FUNCTION


// let post = new Post('a', 'b', 'c');
// console.log(post);

// function Post(title, author, body) {
//     this.title = title;
//     this.author = author;
//     this.body = body;
//     this.comments = 10;
//     this.views = 5;
//     this.live = false;
// }



// //                                                               PRICE RANGES

// let priceRanges = [
//     { label: '$', tooltilp: 'inexpensive', minPerPerson: '0', maxPerPerson: '10' },
//     { label: '$$', tooltilp: 'Moderate', minPerPerson: '11', maxPerPerson: '20' },
//     { label: '$$$', tooltilp: 'Expensive', minPerPerson: '21', maxPerPerson: '50' },
// ];

// let resturants = [
//     { averagePerPerson: 5 }
// ]
// console.log(priceRanges);


