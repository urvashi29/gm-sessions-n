// DOM

// selector
console.log(typeof document.getElementById("sample"));

console.log(document.getElementById("sample").innerHTML);
console.log(document.getElementById("sample").textContent);

let items = document.getElementsByClassName("list-item");
console.log(items);

// for() {

// }

document.getElementById("test").textContent = "Hello!";

// document.getElementsByName("firstname");
// document.getElementsByTagName("p")

// querySelector(css selector): basic, combinators, pseudo class, elements, attribute selectors
console.log(document.querySelector("#sample"));
console.log(document.querySelector(".list-item"));

const arr = [];
let listItems = document.querySelectorAll(".list-item");
listItems.forEach((item) => {
  console.log(item);
  arr.push(item.textContent);
});

console.log(arr);

document.body.style.backgroundColor = "pink";

document.querySelector("#test").style.height = "100px";
document.querySelector("#test").style.backgroundColor = "orange";

// class
let classes = document.querySelector("#sample-card").classList;
classes.add("card");
classes.remove("card");

// creation DOM node
// create an elements
let div = document.createElement("div"); //<div></div>
// div.textContent = "Lorem Ipsum!";

div.innerHTML = "<p>hello</p>Lorem Ipsum";
div.style.color = "orange";

// let p = document.createElement("p");
// p.textContent = "hello";
// div.appendChild(p);

document.body.appendChild(div);

let img = document.createElement("img"); //<img />
img.src =
  "https://plus.unsplash.com/premium_photo-1673795754005-214e3e1fccba?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
img.setAttribute("alt", "pattern");
img.style.height = "100px";
img.style.width = "100px";
document.body.appendChild(img);
document.body.prepend(img);

console.log(img.getAttribute("src"));
// img.removeAttribute("alt");

// document.body.insertBefore();
// document.body.insertAdjacentElement();

document.querySelector("li:last-child").remove();

// capture User Input
function captureInput() {
  let age = document.querySelector("#age").value;
  document.querySelector("#display-age").textContent = age;
  document.querySelector("#age").value = "";
}

// Task
// creating div element, add attribute & css
// get the data from api & display in the form card in UI (https://jsonplaceholder.typicode.com/users)
