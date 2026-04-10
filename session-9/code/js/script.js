// Promise
// async await

// callback: Timings Events, addEventListener, custom, Array methods

// Application: Timings Events (setTimeout & setInterval)

// callback hell (pyramid of doom)
// createAccount(user, function () {
//     getUserDetails(userId, function () {
//         //logic
//         getComments(postId, function (){

//         })
//     })
// })

setTimeout(() => {
  console.log(10);
}, 4000);

console.log("1");

// Promise
let myPromise = new Promise(function (myResolve, myReject) {
  //producing code
  let x = 0;
  if (x == 0) {
    myResolve(`returing a value ${x}`);
  } else {
    myReject("error message");
  }
});

console.log(myPromise);

//consuming a promise
myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// Application: axios, fetch (Promise based)
// axios -> third party http library
// axios
//   .get("api url")
//   .then((res) => {})
//   .catch((err) => {});

console.log("2");

let x = 20;
console.log(x);

//async await
//return promise object
async function multiply() {
  let result = (await 10) * 2;
  return result;
}

console.log(multiply());
multiply()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

async function createAccount() {
  let user = { id: 1, name: "alaya" };
  return user;
}

function getUserDetails(id) {
  return "alaya";
}

async function displayData() {
  try {
    const user = await createAccount().then((u) => {
      return u;
    });
    const details = await getUserDetails(user.id);
    // const userPosts = await getUserCommentPosts(details);
    return details;
  } catch (err) {
    console.log(err);
  }
}

displayData()
  .then((details) => {
    console.log(details);
  })
  .catch((err) => {
    console.log(err);
  });

const getExecute = async () => {
  let promiseObj = new Promise(function (resolve) {
    setTimeout(() => {
      resolve("resolev after 4 seconds");
    }, 4000);
  });

  return await promiseObj;
};

let result = getExecute();
console.log(
  result.then((res) => {
    console.log(res);
  }),
);

// getExecute().then(
//   (res) => {
//     console.log(res);
//   },
//   (err) => {
//     console.log(err);
//   },
// );

// Promise.all([obj1, obj1]);
// Promise.race([obj1, obj1]);

// Task
//  Creating a Simple Promise: Write a function that returns a promise which resolves to a specific object after 1 second.
//  Create an object with a method that returns a promise. The promise should resolve with the object's properties after 2 seconds.
//  Write a function that accepts an object with two promises. Return a new promise that resolves when both resolve (Promise.all).
//  Write a function that takes a promise and a timeout. If the promise exceeds the timeout, reject with an error (Promise.race).
