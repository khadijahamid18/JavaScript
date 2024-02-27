// Undefined and Not defined

// Scope chain and lexical env

// function a() {
//   var b = 10;

//   c();
//   function c() {
//     console.log(b);
//   }
// }

// a();

// Closures

// Function along with its lexical scope bundled together to form a closure

// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }

// var output = x();

// output();



// Syntax = array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// total	Required.
// The initialValue, or the previously returned value of the function.
// currentValue	Required.
// The value of the current element.
// currentIndex	Optional.
// The index of the current element.
// arr	Optional.
// The array the current element belongs to.
// initialValue	Optional.
// A value to be passed to the function as the initial value.



// // Higher order array methods
// const array = [1, 2, 3, 4, 5, 6, 7];

// // Reduce = Higher order array method -> returns a single value;


// let sum = array.reduce((sum, el, index, array) => {
//   return sum + el;
// }, 0);

// console.log(sum);

// let element = array.find((el) => {
//   return el === 6;
// });

// console.log(element);



let studentDetails = [
    {
        id: 1,
        name: "Mohsin shoaib",
        quiz: 10,
        assignments: 10,
        presentations: 7,
        mids: 20,
        finals: 50,
        total: 80,
    },
    {
        id: 2,
        name: "Ali Ahmad",
        quiz: 10,
        assignments: 10,
        presentations: 10,
        mids: 15,
        finals: 45,
        total: 70,
    },
    {
        id: 3,
        name: "Shahzaib Sarwar",
        quiz: 10,
        assignments: 10,
        presentations: 10,
        mids: 20,
        finals: 50,
        total: 49,
    },
    {
        id: 4,
        name: "Shahzaib Sarwar",
        quiz: 0,
        assignments: 0,
        presentations: 0,
        mids: 0,
        finals: 0,
        total: 0,
    },
];

const calcResults = (input) => {
    if (input === 1) {
        let totalClassMarks = studentDetails.length * 100;
        let obtainedClassMarks = studentDetails.reduce((acc, student) => {
            return acc + student.total;
        }, 0);

        return (obtainedClassMarks / totalClassMarks) * 100;
    }

    if (input === 2) {
        return studentDetails;
    }

    if (input === 3) {
        let rollNumber = Number(prompt("Please enter student roll no"));
        let student = studentDetails.find((student) => student.id === rollNumber);
        return student ? student : "No student exists with the given id";
    }

    if (input === 4) {
        let newStudents = studentDetails.filter((student) => student.total >= 50);

        studentDetails = [...newStudents];

        return studentDetails;
    }

    if (input === 5) {
        let rollNumber = Number(prompt("Please enter student roll no"));
        let student = studentDetails.find((student) => student.id === rollNumber);

        if (!student) return "Invalid STudent ID";

        let newObj = {
            ...student,
            name: "Updated Name",
            total: 80,
        };

        let newStudentsArray = studentDetails.map((student) => {
            if (student.id === newObj.id) {
                return newObj;
            } else {
                return student;
            }
        });

        studentDetails = [...newStudentsArray];

        return studentDetails;
    }

    
};

console.log(calcResults(5));   