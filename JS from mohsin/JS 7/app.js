// OOP in javascript
// OOP in javascript is prototype based.

// Prototype = Parent

// Constructor functions -> used to instantiate objects in javascript
// 4 things happens behind the scenes whenever we call an constructor with a new operator

// {} empty object is created
// this keyword starts pointing to that object
// this new object is linked with an prototype
// automatically returns this object

const Person = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  };
  
  Person.prototype.calculateAge = function (birthYear) {
    let date = new Date().toISOString();
    let year = date.substring(0, 4);
    let dob = Number(year) - birthYear;
    console.log(dob);
  };
  
  // Object.prototype
  
  let mohsin = new Person("Mohsin", "Shoaib", 2000);
  
  // console.log(mohsin.__proto__ === Person.prototype);
  
  // let shoaib = new Person("Shoaib", "Ahmad", 1995);
  
  // console.log(shoaib);
  
  // mohsin.calculateAge(2000);
  
  const arr = [1, 2, 3, 4, 5, 6];
  Array.prototype.name = "Mohsin";
  console.log(arr);
  console.log(arr.length);