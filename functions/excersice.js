// //                                     Sum of Objects

// function sum(a, b)
// {
//     total = 0;
//     for(let value of arguments)
//     total += value;
//     return total;
// }
// console.log(sum(1, 3, 6));  // 10


// function sum(...items)
// {
//     return items.reduce((a, b) => a + b);
// }
// console.log(sum(1, 3, 6));  // 10



// //                                         Sum of Array


// console.log(sum([1, 2, 3, 4]));
// function sum(...items) {
//     if(items.length === 1 && Array.isArray(items[0]))
//        items = [...items[0]];

//     return items.reduce((a, b) => a + b);
// }



// //                                            Area of Circle



// const circle = {
//     radius : 1,
//     get area() { // get to make it read only
//         return Math.PI * this.radius * this.radius;
//     }
// };
// console.log(circle.area);



//                                           Error Handling



try {
    const num = [1, 2, 3, 4];
    const count = countOccurances(null, 1);
    console.log(count);
}
catch (e) {
    console.log(e.message);
}
function countOccurances(array, searchElement) {
    if (!Array.isArray(array)) {
        throw new Error('Invalid Array');
    }
    return array.reduce((accumulator, current) => {
        const occurances = (current === searchElement) ? 1 : 0;
        return accumulator + occurances;
    }, 0);
}