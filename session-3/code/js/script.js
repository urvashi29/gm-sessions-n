// Array Methods ES6
// Prototype

// callback function: Function passed as an argument to another function
function add(a, b, myCallback) {
  let sum = a + b;
  myCallback(sum); //calling the callback
}

// s -> callback parameter
add(10, 20, function (s) {
  console.log(s);
}); //callback function

// Application: Timing Events, Async, DOM manipulation, Array ES6 methods

// high ordered function: is function which takes another function as argument or return a function
// first class function: if function is passed as value

// function declaration
function subtract() {
  return 20 - 10;
}

let sub = subtract();
console.log(sub);

// function expression
const subtractVal = function () {
  return 100 - 50;
};

let s = subtractVal();
console.log(s);

// this keyword: refer to object based on where it placed
console.log(this); //window

function thisKeyword() {
  console.log(this); //window: owner object of the function
}

thisKeyword();

let person = {
  details: function () {
    console.log(this); //person
  },
  detail: () => {
    console.log(this); //window
  },
};

person.details();
person.detail();

// function keyword vs arrow(fat) function (ES6)
// 1. syntax
addVal = () => {
  return 10 + 20;
};

// is same as
addVal = () => 10 + 20;

console.log(addVal());

// 2. return keyword

// 3. this keyword

// pure function
let x = 20;

// function addToCart(products, pId) {
//   let filterProducts = products.filter();
//   return filterProducts;
// }

// addToCart(products, 2);
// addToCart(products, 2);

// closure function
// lexical envionment
outer = () => {
  let counter = 0;

  return () => {
    counter++;
    console.log(counter);
  };
};

const cf = outer();
console.log(cf);
cf();
cf();
cf();

entertainmentApp = () => {
  let user = "Guest";

  changeUserType = (type) => {
    user = type;
  };

  return changeUserType;
};

let ea = entertainmentApp();
ea("paid");
ea("premium");

createTimer = () => {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log("Timer", i);
    }, i * 1000);
  }
};

createTimer();

// 1000ms = 1s

// for (let i = 1; i <= 5; i++) {
//   setTimeout(() => {
//     console.log("Timer", i);
//   }, 0);
// }
