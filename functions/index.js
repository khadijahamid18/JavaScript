// //                                          Function Declaration

// function walk() {
//     console.log('walk');
// }
// walk();


// //                                      Annonymous Fuction Expression

// const run = function() {
//     console.log('run');
// }
// run();



// //                                               Arguments

// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(1, 3));  // 4

// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(1));   // Nan

// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(1, 3, 5));  // 4


// function sum(a, b) {
//     let total = 0;
//     for(let value of arguments)
//         total += value;
//     return total;
// }
// console.log(sum(2, 3, 5, 10));  // 20



// //                                            The Rest Operator


// function sum(...args) {
//     return args.reduce((a , b) => a + b);
// }
// console.log(sum(1, 3, 5));  // 9

// function sum(discount, ...price) {
//     const total = price.reduce((a, b) => a + b);
//     return total * (1 - discount);
// }
// console.log(sum(0.1, 20, 30)); // 45



// //                                              Default Parameters


// function interest(principal, rate, years)
// {
//     rate = rate || 3.5;  // Not Recommended
//     years = years || 5;

//     return principal * rate / 100 * years;
// }
// console.log(interest(10000)); // 1750


// function interest(principal, rate = 3.5, years = 5)  // Recommended
// {
//     return principal * rate / 100 * years;
// }
// console.log(interest(10000)); // 1750


// function interest(principal, rate = 3.5, years) 
// {
//     return principal * rate / 100 * years;
// }
// console.log(interest(10000, 5)); // Wrong bcz complier will take 5 as rate and not years


// function interest(principal, rate = 3.5, years)  // OR
// {
//    return principal * rate / 100 * years;
// }
// console.log(interest(10000, undefined, 5)); // 1750 




// //                                            Getters and Setters


// const person = {
//     fname : 'Khadija',
//     lname : 'Hamid'
// };
// console.log(`${person.fname} ${person.lname}`); 


// const person = {
//     fname : 'Khadija',
//     lname : 'Hamid',
//     fulName() {
//         return `${person.fname} ${person.lname}`;
//     }
// };
// console.log(person.fulName()); 


// const person = {
//     fname : 'Khadija',
//     lname : 'Hamid',
//     get fulName() {
//         return `${person.fname} ${person.lname}`;
//     }, 

//     set fulName(value) {
//         const parts = value.split(' ');
//         this.fname = parts[0];
//         this.lname = parts[1];
//     }

// };

// person.fulName = 'Muhammad Hamid';
// console.log(person);  



// //                                      Try and Catch (Error Handling)


// const person = {
//     fname : 'Khadija',
//     lname : 'Hamid',
//     set fulName(value) {
//         if(typeof value !== 'string') return;

//         const parts = value.split(' ');
//         this.fname = parts[0];
//         this.lname = parts[1];
//     }

// };

// person.fulName = null;
// console.log(person);


// // Throw


// const person = {
//     fname : 'Khadija',
//     lname : 'Hamid',
//     set fulName(value) {
//         if(typeof value !== 'string') 
//         throw new Error('Value is not a string');

//         const parts = value.split(' ');
//         if(parts.length !== 2)
//         throw new Error('Enter a first and last name');

//         this.fname = parts[0];
//         this.lname = parts[1];
//     }

// };
// try {
//     person.fulName = null;
// }
// catch (e) {
//     // console.log(e);
//     alert(e);
// }
// console.log(person);


// //                                              The This Keyword


// const video = {
//     title : 'a',
//     play() {
//         console.log(this);
//     }
// };
// video.shop = function() {
//     console.log(this);
// }
// video.shop();


// const video = {
//     title: 'a',
//     play() {
//         console.log(this);
//     }
// };
// function Video(title) { // constructor function
//     this.title = title;
//     console.log(this);
// }
// const v = new Video('b');


// const video = {
//     title : 'a',
//     tags : ['a', 'b', 'c'],
//     showtags() {
//         this.tags.forEach(function(tags) {
//             console.log(tags);
//         });
//     }
// };
// video.showtags();


// const video = {
//     title : 'a',
//     tags : ['a', 'b', 'c'],
//     showtags() {
//         this.tags.forEach(function(tag) {
//             console.log(this.title, tag);
//         }, this); // also show title a
//     }
// };
// video.showtags();



// //                                                Changing This


// const video = {
//     title : 'a',
//     tags : ['a', 'b', 'c'],
//     showtags() {
//         const self = this;
//         this.tags.forEach(function(tags) {
//             console.log(self.title, tags);
//         });
//     }
// };
// video.showtags();


// function playVideo(a, b) {
//     console.log(this);
// }
// playVideo.call({name : 'Khadija'}, 1, 2);
// playVideo.apply({name : 'Khadija'}, [1, 2]);
// const fn = playVideo.bind({name : 'Khadija'});
// fn();
// playVideo();


// function playVideo(a, b) {
//     console.log(this);
// }
// playVideo.call({name : 'Khadija'}, 1, 2);
// playVideo.apply({name : 'Khadija'}, [1, 2]);
// const fn = playVideo.bind({name : 'Khadija'}) ();
// playVideo();


// const video = {
//     title : 'a',
//     tags : ['a', 'b', 'c'],
//     showtags() {
//         this.tags.forEach(function(tags) {
//             console.log(this.title, tags);
//         }.bind(this));
//     }
// };
// video.showtags();


const video = {
    title : 'a',
    tags : ['a', 'b', 'c'],
    showtags() {
        this.tags.forEach(tags => {
            console.log(self.title, tags);
        });
    }
};
video.showtags();
