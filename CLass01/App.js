console.log("class01")

// Variable:
// JavaScript includes variables which hold the data value and it can be changed anytime

// Const:
// The const declaration creates a read-only reference to a value. It does not mean the value it holds is 
// immutable—just that the variable identifier cannot be reassigned.
// A constant cannot share its name with a function or a variable in the same scope.
//const mai further redeclare nhe kr skte
// Let:
// The let statement declares a block-scoped local variable
// let allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used, unlike the var keyword, which defines a variable globally, 
// or locally to an entire function regardless of block scope. 


var fname = "burera"; //string
fname="biya";
var number = 66;      //number
var channel;
console.log(fname,channel);


// Rules of Javascript
// 1.cannot start with numbers:
// 2.Can start with letter ,_,$
// 3.Are case sensitive


// Now many developer community use let and const instead of var ...SVGAnimatedNumberList.because they both inscres the code readibility

// const lname ="burera";
// lname="biya";   ///wrongggg
// const fruit; //error must asssign an value



// global scope mean pure code ko excess kr skte hn block mtlb ek block pr km hota ha jese function k  andhr ya if-else mai
//agr local pr variable ha he nhe tou wo global wala he le ga

var city = 'Delhi';
console.log(city);

const ownersName = 'Hari Ram';
// ownersName = 'Harry'; // Cannot do this (error)
console.log(ownersName);
const fruit = 'Orange';

{
 let city = 'Rampur';   
 city = 'Kolkata';
 console.log(city);
}
console.log(city);


const arr1 = [12,23,12,53, 3];
// arr1.push(45);
console.log(arr1)

/* Most common programming case types:

1. camelCase  
2. kebab-case
3. snake_case 
4. PascalCase 


*/

// Date types in js:
// Primitive datatypes:
// Reference Data Types:


   
// // String
// let name = "harry";
// console.log("My string is " + name);
// console.log("Data type is " + (typeof name));

// // Numbers
// let marks = 34.4;
// console.log("Data type is " + (typeof marks));

// // Boolean
// let isDriver = true;
// console.log("Data type is " + (typeof isDriver));

// // Null
// let nullVar = null;
// console.log("Data type is " + (typeof nullVar));

// // Undefined
// let undef = undefined;
// console.log("Data type is " + (typeof undef));

// // Reference Data Types

// // Arrays
// let myarr = [1, 2, 3, 4, false, "string"];
// console.log("Data type is " + (typeof myarr));

// // Object Literals
// let stMarks = {
//     harry: 89,
//     Shubham: 36,
//     Rohan: 34
// }
// console.log( typeof stMarks);

// function findName() {
    
// }
// console.log( typeof findName);

// let date = new Date();
// console.log( typeof date);




