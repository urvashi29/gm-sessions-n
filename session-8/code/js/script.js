// addEventListener("event name", function (){}, boolean)
document.querySelector("#hover").addEventListener("mouseover", function () {
  console.log("on mouse over!");
});

document.querySelector("#age").addEventListener("input", function (e) {
  // e is event object and automatically created when an event will happen
  console.log(e);
  console.log(e.target); //input
  console.log(e.target.value);
  console.log(this.value); //
});

document.querySelector("#form").addEventListener("submit", function (e) {
  e.preventDefault(); //to prevent to default behavior of event
  console.log("Form is submitted");
});

// Event bubbling -> false ( by default)
document.querySelector("#one").addEventListener(
  "click",
  function (e) {
    console.log("One is clicked");
  },
  false,
);

document.querySelector("#two").addEventListener(
  "click",
  function (e) {
    console.log("Two is clicked");
    e.stopPropagation();
  },
  false,
);

document.querySelector("#three").addEventListener(
  "click",
  function (e) {
    console.log("Three is clicked");
    e.stopPropagation();
  },
  false,
);

// capturing -> true
// document.querySelector("#one").addEventListener(
//   "click",
//   function () {
//     console.log("One is clicked");
//   },
//   true,
// );

// document.querySelector("#two").addEventListener(
//   "click",
//   function () {
//     console.log("Two is clicked");
//   },
//   true,
// );

// document.querySelector("#three").addEventListener(
//   "click",
//   function () {
//     console.log("Three is clicked");
//   },
//   true,
// );

// map (key value pair)
const myMap = new Map();

myMap.set("name", "alex");
myMap.set(1, "guest");
console.log(myMap);

console.log(myMap.get(1));
console.log(myMap.has("name"));

// set (unique value)
const s = new Set([1, 100, 2, 3, 1]);
s.add(1);
s.add(2);
s.add(1);

console.log(s);

console.log(s.has(100));
s.delete(2);
console.log(s);

console.log(Array.from(s));

// Timing Events
let timeoutId = setTimeout(() => {
  alert("Welcome!");
}, 4000);

// 1000 ms = 1s

let intervalId = setInterval(() => {
  let d = new Date();
  console.log(d);
}, 1000);

document.querySelector("#stop").addEventListener("click", function () {
  clearTimeout(timeoutId);
  clearInterval(intervalId);
});

console.log("start");

