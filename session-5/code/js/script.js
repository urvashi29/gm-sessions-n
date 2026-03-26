// Prototypal inheritance
function Employee(name, salary, experience = 0) {
  this.name = name;
  this.salary = salary;
  this.experience = experience;
}

Employee.prototype.nationality = "Indian";

const emp = new Employee("alina", 200000, 5);
console.log(emp);

function Programmer(language, name, salary, experience) {
  Employee.call(this, name, salary);
  this.language = language;
}

// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

// Manaully set the constrcutor
Programmer.prototype.constructor = Programmer;

const p = new Programmer("c++", "alex", 20000, 4);
console.log(p);

let nums = [10, 20, 30, 100];
console.log(nums);

console.log(p);

// call, apply(), bind()
let person = {
  fullName: function (a, b) {
    console.log(
      "This is " + this.firstName + " " + this.lastName + " " + a + " " + b,
    );
  },
};

let user = {
  firstName: "alex",
  lastName: "joe",
};

person.fullName.call(user, "india", "canada");
person.fullName.apply(user, ["India", "Canada"]);

console.log(Math.max(1, 10, 2, 3, 4));
console.log(Math.min(1, 10, 2, 3, 4));

let arr = [10, 2, 3, 4, 5, 100];
console.log(Math.max.apply(null, arr));

console.log(Math);

// bind()
let employees = {
  first: "alaya",
  last: "Joe",
  getUsers() {
    console.log(this.first + " " + this.last);
  },
};

let getUser = employees.getUsers.bind(employees);
getUser();

// ES6 features
// class

//template of js object
class Shapes {
  constructor(id) {
    this.id = id;
  }

  details() {}
}

const s = new Shapes(10);
console.log(s);

class Circle extends Shapes {
  constructor(radius) {
    super(6);
    this.radius = radius;
  }
}

const c = new Circle(5);
console.log(c);

//Template strings  (``)
let strVal = "hello \n world";
let str = `hello
world`;

console.log(str);

// variable & expression substitution
let first = "alina";
let last = "joe";
let country = "Canada";

console.log("This is " + first + " " + last + " lives in " + country);

console.log(`This is ${first} ${last}, living in ${country}`);

// Debugging
