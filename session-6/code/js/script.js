// spread operator (expand spread array & object) shallow copy
let obj = {
  a: 10,
  b: 10,
};

// let objTwo = obj;
// objTwo.a = 100;
// console.log(obj, objTwo);

// using spread operator(...)
let objTwo = { ...obj, a: 100, z: 200 };
console.log(objTwo, obj);

let one = [10, 20, 30, 20];
let two = [...one, 100, 200];
console.log(one, two);

// Rest operator(...)
add = (...arr) => {
  console.log(arr);
};

add(10, 20, 30, 40, 4, 10);

// destructuring of arrays & objects
let person = {
  id: 10,
  isVerified: true,
  //   contact: {
  //   },
  //   address: {

  //   }
};

const { id, isVerified } = person;
console.log(id, isVerified);

// property shorthand

let nums = [10, 2, 3, 4, 3, 100, 200, 300];
const [x, y, z, , ...n] = nums; //rest operator
console.log(x, y, z, n);

// restructuring of object & arrays
let first = "alina";
let last = "joe";
let age = 10;

const user = {
  first,
  last,
  age,
};

// default function agruments
function getUser(a = "admin", id) {
  console.log(a, id); //
  //   console.log(arguments)
}

let access;
getUser(access, 10);

// Symbol: primitive datatype
const mySym = Symbol("hello");
console.log(mySym);
console.log(mySym.description);

const idOne = Symbol("user");
const idTwo = Symbol("user");

console.log(typeof idOne);

console.log(idOne === idTwo);

const users = {
  [idOne]: 12345,
  name: "Alaya",
  [idTwo]: 1890809,
};

console.log(users[idOne]);
console.log(users[idTwo]);
console.log(users.name);

console.log(users);

// web storages (client storage)
localStorage.setItem("theme", "light");
localStorage.setItem("person", JSON.stringify(person));
console.log(JSON.parse(localStorage.getItem("person")));
// localStorage.clear();
localStorage.removeItem("theme");

// sessionStorage
sessionStorage.setItem("token", "090909");
sessionStorage.clear();
sessionStorage.removeItem("token");

// JSON

// cookie
document.cookie =
  "firstname=alaya; expires=Wed, 21 Oct 2025 07:28:00 GMT; path=/";
