// Arithmetic Opeartor
console.log(10 + 20);
console.log(20 - 10);
console.log(20 * 1);
console.log(100 / 10); //return quotient
console.log(100 % 5); //return remainder

let x = 10;
x++;
console.log(x); //x + 1
x--;
console.log(x); //x - 1

// ++x
// --x

// Comparison Operators (return boolean value)
let a = 20;
let b = 30;
console.log(9 == "9"); //compare value
console.log(9 === "9"); //compare value & datatype (strict checking)
console.log(a > 10);
console.log(b < 20);
console.log(a >= 20);
console.log(a != "20"); //compare value
console.log(a !== "20"); //compare value & datatype (strict checking)

// Logical Operators (|| or && or !)
let fName = "alina";
console.log(9 == "9" && 9 === "9"); //return true if all are true, otherwise false
console.log(9 == "9" || 9 === "9"); //either has to be true
console.log(!fName == "alina");

// string operator (+)
let str = "hello";
let strVal = "world";

console.log(str + strVal);
console.log(str + 100); //
console.log(10 + 20 + strVal); //30world
console.log(str + 20 + 20); //
console.log(str + 20 - 20); //NaN
console.log("hello" - 20);
console.log("10" / 10); //
console.log(20 + "20");

// bracket
// / *
// + -
// L -> R

// Implicit coersion
// 1. check operator precendence
// 2. if any of the operand is string and "+" is present, concatenate
// 3. if operator is not "+", check type of opearand alpha string present, NaN
// if numeric string is there, do automatic type concersion

//nullish operator (??)
let count = null;
let result = count ?? 10;
console.log(result);

// if(count == null) {
// }

//optional chaining (?.)
let user = {
  firstName: "alex",
  contact: {
    email: "admin@gmail.com",
  },
};

console.log(user.location?.city);
console.log(user.contact?.email);

// ternery operator (?:)
str == "hello" ? console.log(str) : console.log("nothing");

//ES6: Spread, Rest, destrcuturing

// Explicit coersion
// number to string
let y = 10;
console.log(y.toString()); //"10"
console.log(y.toFixed(2)); //"10.00"

//string to number
console.log(Number("10")); //10
console.log(Number("hfejfie")); //NaN
console.log(Number("90jolk")); //NaN

console.log(parseFloat("10.389"));
console.log(parseInt("20.99"));

console.log(Number(true)); //1
console.log(Number(false)); //0

console.log(true.toString());
("true");
console.log(false.toString());

console.log(true > false); //
console.log(true + false > 4);

console.log(undefined == null); //true
console.log(undefined === null); //false

console.log(1 || 0); //
console.log(1 && 0);

console.log(null || 1);

console.log(undefined || null || 0); //

// Array
let nums = [10, 2, 3, 20, 4, 5, 6, 7];
// push():  add element in the end
// pop(): remove 1 elemeny from ens
// shift(): add new element in the start
// unshift(): remove 1 element in the start
// splice(): add & remove from between of array

// slice()
console.log(nums.slice(1, 5)); //return array from 1st till 4th index

// includes()
console.log(nums.includes(20));

// reverse()
nums.reverse();
console.log(nums);

// join()
console.log(nums.join("*"));

// concat()

// String
// indexing start from 0
let sample = " hello world hello ";
console.log(sample.length);
console.log(sample.search("hello")); //return the index of h
console.log(sample.indexOf("hellohi"));
console.log(sample.replaceAll("hello", "HELLO"));
console.log(sample.toUpperCase());
console.log(sample.toLowerCase());
console.log(sample.trim());
console.log(sample.includes("hello"));
console.log(sample.slice(2, 10)); //return the string from 2nd till 9th index

console.log(sample.split(" "));

// "admin@gmail.com".toLowerCase() == "ADMIN@gmail.com".toLowerCase()
