// IIFE / self-invoking function

// ES6 Array Methods: map, filter, forEach, some, every, reduce, find
const arr = [10, 20, 3, 40, 5, 100];
let mapResult = arr.map((ele, index, a) => {
  console.log(ele, index, a);
  return 2 * ele;
});
console.log(mapResult); //

//forEach doesn't return anything
arr.forEach((e, i, a) => {
  console.log(e, i, a);
});

//filter: filter all the array elements that pass the test/condition
let filterResult = arr.filter((e, i, a) => e >= 18);
console.log("filter", filterResult);

//find: return 1 array element that pass the condition
let findResult = arr.find((e, i, a) => e >= 18);
console.log("find", findResult);

// some: return boolean value
let someResult = arr.some((e, i, a) => {
  return e >= 18;
});

console.log(someResult);

// every: return boolean value
let everyResult = arr.every((e, i, a) => {
  return e >= 18;
});

console.log(everyResult);

//reduce: reduce an array to a single value
// [10, 20, 3, 40, 5, 100]
let reduceResult = arr.reduce((total, num) => {
  console.log(total); //0 10 30 33 73 78 178
  console.log(num); //10 20 3 40 5 100
  return total + num;
}, 0);

console.log(reduceResult);

// Prototype
// object function constructor
function Company(cId, estYear) {
  this.cId = cId;
  this.estYear = estYear;
  this.details = function () {};
}

//instance member
Company.prototype.nationality = "Indian";
const abc = new Company(101, 2004);
console.log(abc);
console.log(Company.constructor);

//object literal
let person = {
  id: 10,
  name: "Alex",
};

console.log(person);
console.log(arr);
console.log(Array.isArray(arr));
console.log(Array.prototype);

let str = new String("hello");
console.log(str);

let num = new Number(20);
console.log(num);

Array.prototype.findMax = function (arr) {
  //
  return arr;
};

// let str = "hello"
// let numb = 20
