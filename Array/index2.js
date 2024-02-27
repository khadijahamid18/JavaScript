// //                                                     MAPPING AN ARRAY


// const num = [1, -2, 5, 5, 3];
// const filtered = num.filter(n => n >= 0);
// const items = filtered.map(n => '<li>' + n + '</li>');
// const html = '<ul>' + items.join(' ') + '</ul>';
// console.log(html);


// //                                                           OBJECTS


// const num = [1, -2, 5, 5, 3];
// const filtered = num.filter(n => n >= 0);
// const items = filtered.map(n => {
//     const obj = {value : n};
//     return obj;
// });
// console.log(items);

// const num = [1, -2, 5, 5, 3];
// const filtered = num.filter(n => n >= 0);
// const items = filtered.map(n => {
//     return {value : n};
// });
// console.log(items);

// const num = [1, -2, 5, 5, 3];
// const filtered = num.filter(n => n >= 0);
// const items = filtered.map(n => ({ value: n }));
// console.log(items);

// const num = [1, -2, 5, 5, 3];
// const items = num
// .filter(n => n >= 0) 
// .map(n => ({ value: n }));
// console.log(items);

// const num = [1, -2, 5, 5, 3];
// const items = num
// .filter(n => n >= 0) 
// .map(n => ({ value: n }))
// .filter(obj => obj.value > 3);
// console.log(items);   // 5   5
 



// //                                                        REDUCING AN ARRAY


// // // previous method for sum
// // const num = [1, -4, 3, 7, 8, 3];
// // let sum = 0;
// // for (let no of num) {
// //     sum += no;
// // }
// // console.log(sum);



// // a = 1,   c = 5 =>   a = 6
// // a = 6,   c = -3 =>  a = 3
// // a = 3,   c = 7 =>   a = 10
// // a = 10,  c = 4 =>   a = 14  Ans
// // const num = [1, 5, -3, 7, 4];
// // let sum = num.reduce((accumultor, currentValue) => {
// //     return accumultor + currentValue;
// // });  // 0 likhain gy to 0 se start ho ga ni to array ki first value se dono se same result ho ga
// // console.log(sum);


// const num = [1, 5, -3, 7, 4];
// let sum = num.reduce(
//     (accumultor, currentValue) => accumultor + currentValue);
// console.log(sum);