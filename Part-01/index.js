//VARIABLES/////////////////

// alert("Hello World!");
// let a = 10;
// console.log(a);
// const PI = 3.14159265358979323846;



//DATA TYPES//////////////////////

//Number Data Type////////////////////

/*let num1 = 5; // Number
console.log(typeof num1); // Number

let num2 = 10.012; // Number
console.log(typeof num2); // Number

let num3 = Math.ceil(num2);
console.log(num3); // 11

let num4 = Math.floor(num2);
console.log(num4); // 10


//String Data Type///////////////////

let str1 = "Hello World!"; // String
console.log(str1,typeof str1); // Hello World! String

let str2 = 'a'; // String
console.log(str2,typeof str2); // String

let num5 = str2.charCodeAt(0); // Convert string to number
console.log(num5); // 97

let str3 = "100";
console.log(typeof str3); // String

let num6 = Number(str3); // Convert string to number
console.log(num6,typeof num6); // 100 Number


//Boolean Data Type////////////////////
let bool1 = true; // Boolean
console.log(bool1,typeof bool1); // true Boolean


let num7 = Boolean(0);
console.log(num7); // false

let str4 = Boolean("Apoorv"); // Convert string to boolean
console.log(str4,typeof str4); // true


//////Undefined Data Type////////////////////
let und1; // Undefined
console.log(und1,typeof und1); // undefined
*/

///BigInt Data Type///////////////////////


/* const num = 100000000000000101010;
console.log(BigInt(num)); // 100000000000000101010n

const num1 = BigInt(1);
console.log(num1); // 1n

const num2 = BigInt(10.63636363)
console.log(num2); //Cannot covert floating point literal to BigInt*/

/*const firstName = 'Apoorv';
const lastName = 'Sharma';
console.log(firstName + lastName); // ApoorvSharma
console.log(firstName + " " + lastName); // Apoorv Sharma

const age = 22;

console.log(`My name is ${firstName} ${lastName} and I am ${age} years old.`); // My name is Apoorv Sharma and I am 22 years old.*/



//Coding Challenge 1///////////

/*const massMark = 78;
const heightMark = 1.69; // in meters
const massJohn = 92;    // in kg    
const heightJohn = 1.95; // in meters
const markBMI = massMark / (heightMark * heightMark);
const johnBMI = massJohn / (heightJohn * heightJohn);
console.log(markBMI, johnBMI); // 27.4 24.2 
const markHigherBMI = markBMI > johnBMI; // true
console.log(markHigherBMI); // true


const massMark1 = 95;
const heightMark1 = 1.88; // in meters
const massJohn1 = 85;    // in kg
const heightJohn1 = 1.76; // in meters
const markBMI1 = massMark1 / (heightMark1 * heightMark1);
const johnBMI1 = massJohn1 / (heightJohn1 * heightJohn1);
console.log(markBMI1, johnBMI1); // 26.8 27.4
const markHigherBMI1 = markBMI1 > johnBMI1; // false
console.log(markHigherBMI1); // false*/

//String Template Literals///////////////////////
/*const firstName = 'Apoorv';
const lastName = 'Sharma';
const age = 22;
const job = 'Software Engineer';
const birthYear = 2003;
console.log(`I am ${firstName} ${lastName} aged ${age}. I was born in ${birthYear} and currently workin as a ${job}`);*/

// let number = String(10);
// console.log(number,typeof number); // 10


//If Else Statement///////////////////////

/*const age = Number(prompt("Enter your age: "));
console.log(age,typeof age); // 22 Number
if(age>18){
    alert("You can drive.");
}
else{
    alert("You cannot drive.");
}
*/
//Challenge 2///////////////////////

/*const massMark1 = 95;
const heightMark1 = 1.88; // in meters
const massJohn1 = 85;    // in kg
const heightJohn1 = 1.76; // in meters
const markBMI1 = massMark1 / (heightMark1 * heightMark1);
const johnBMI1 = massJohn1 / (heightJohn1 * heightJohn1);

if(markBMI1>johnBMI1){
    console.log(`Mark's BMI (${parseFloat(markBMI1.toFixed(1))}) is higher than John's (${parseFloat(johnBMI1.toFixed(1))}).`);
}

else{
    console.log(`John's BMI (${parseFloat(johnBMI1.toFixed(1))}) is higher than Mark's (${parseFloat(markBMI1.toFixed(1))}).`);
}*/


// let a;
// console.log(a+10); 
