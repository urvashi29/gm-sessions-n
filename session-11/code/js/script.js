// Debouncing
function debounce(func, delay) {
  let timeoutId;

  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this);
    }, delay);
  };
}

function getUserInput() {
  console.log("user input");
}

const debouncedFun = debounce(getUserInput, 2000); //function , delay

document.querySelector("#debounce").addEventListener("input", debouncedFun);

// Throttle
function throttle(func, delay) {
  let timeoutId;

  return () => {
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        func.apply(this);
        timeoutId = null;
      }, delay);
    }
  };
}

function getData() {
  console.log("data");
}

const throttleFunc = throttle(getData, 2000);
document.querySelector("#throttle").addEventListener("input", throttleFunc);

console.log(1);

let x = setTimeout(() => {
  console.log("hello");
}, 1000);

const myPromise = new Promise(() => {
  //   setTimeout(() => {}, 2000);
});

// Event loop & BHS

// DOM manipulation Example
