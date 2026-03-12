// variables
//global scope
var firstName = "alina"; //"" or ''
var num = 89.9; //
var isVerfied = true; //or false

// indexing at 0
var arr = ["", 29, true, []];
console.log(arr);

//object literal
var car = {
  model: "",
  color: "",
  price: 90900,
  yearManufactured: 2020,
  details: {},
};

console.log(typeof arr); //

var a = null;
console.log("a is ", a); //null
console.log(typeof a); //object

var b;
console.log(b); //undefined
console.log(typeof b); //undefined

console.log(typeof firstName);
console.log(typeof num);
console.log(typeof isVerfied);
console.log(typeof car); //object

// var d = new Date();//date object

add();

function add() {
  //local scope
  var x = 10 + 100;
  console.log(x);
}

add();
// console.log(x);//error

// ES6 -> 6th version of JS
// let: declare a block scoped variable
// {
// }

// if() {}

// for(){}

// 1. block scope
// 2. re declaration
// 3. In const, re intialisation is not allowed, it defined constant reference not value
// 4. let, const are not hoisted

let x = 10;
// let x = 20;//error
console.log(x);

{
  let x = 20;
  x = 200;
  console.log(x);
}

// const: declare a block scoped variable, with constant reference
const y = 10;
// const y = 10;//error
console.log(y);

{
  const y = 20;
  //   y = 200
  console.log(y);
}

const arrNum = [10, 2, 3, 4, 5, 10];
arrNum[0] = 100;
console.log(arrNum);

// hoisting: only declaration
sample = 10;
console.log(sample);
var sample;

// temporal dead zone
// sampleTwo = 10;
// console.log(sampleTwo);
// const sampleTwo;

// create objects for products, movies data
