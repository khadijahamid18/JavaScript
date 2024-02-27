// //                                               ARRAY FROM RANGE

const num = arrayFromRange(1, 4)
console.log(num);
function arrayFromRange(min, max) {
    const output = [];
    for (let i = min; i <= max; i++) {
        output.push(i);
    }
    return output;
}



//                                                      INCLUDES


// const num = [1, 3, 6, 8];
// console.log(include(num, 2));

// function include(array, searchElement) {
//     for (let elemnt of array) {
//         if (elemnt === searchElement) {
//             return true;
//         }
//     }
//     return false;
// }