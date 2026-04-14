// Event loop
// DOM manipulation

// API
// https://dummyjson.com/docs/products
// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/users

// API Integration
const baseUrl = "https://dummyjson.com/products";
const userApi = "https://jsonplaceholder.typicode.com/users";

async function getProducts() {
  try {
    const response = await axios.get(baseUrl);
    let products = await response.data.products;
    console.log(products);
    displayProducts(products);
  } catch (err) {
    console.log(err);
  }
}

function displayProducts() {
  //DOM manipulation
}
document.querySelector("#products").addEventListener("click", getProducts);

async function getUsers() {
  try {
    const res = await fetch(userApi);
    console.log(res);
    if (!res.ok) {
      if (res.status === 404) {
        throw new Error("Resource not found!");
      } else {
        throw new Error("Error code: ", res.status);
      }
    }

    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
    console.log(err.message);
  }
}

// fetch(baseUrl)
//   .then((res) => {
//     // if(res.error === 404) {

//     // }
//     if (!res.ok) {
//       throw new Error(res.status);
//     }
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

document.addEventListener("DOMContentLoaded", getUsers);

async function addProduct() {
  try {
    const res = await fetch(`${baseUrl}/add`, {
      method: "POST",
      body: JSON.stringify({ title: "BMW Pencil" }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

document.querySelector("#add-product").addEventListener("click", addProduct);

async function addNewProduct() {
  try {
    const res = await axios.post(`${baseUrl}/add`, {
      method: "POST",
      body: JSON.stringify({ title: "BMW Pencil" }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

document.querySelector("#add").addEventListener("click", addProduct);

// Debugging

// throttling & Debouncing
function throttle() {
  return function () {};
}

function searchProduct() {}

let throttleFunc = throttle(searchProduct);
document.querySelector("#product").addEventListener("input", throttleFunc);
