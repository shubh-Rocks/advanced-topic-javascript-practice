// const expect = function (val) {
//   return {
//     toBe: function (parentVal) {
//       if (parentVal === val) {
//         return { value: true };
//       } else {
//         throw new Error("not equal");
//       }
//     },
//     notToBe: function (childVal) {
//       if (childVal !== val) {
//         return { value: true };
//       } else {
//         throw new Error("not equal");
//       }
//     },
//   };
// };

// expect(4).toBe(4);

// const arr = [1, 2, 3];

// var map = function (arr, fn) {
//   const returnedArray = [];

//   for (let i = 0; i < arr.length; i++) {
//     returnedArray.push(fn(arr[i], i));
//   }

//   return returnedArray;
// };

// const fn = function plusone(n,i) {
//   return n + i;
// };

// // console.log(map(arr, fn));

// const arr = [1, 2, 3];

// var map = function (arr, fn) {
//   const returnedArray = [];

//   for (let i = 0; i < arr.length; i++) {
//     returnedArray.push(fn(arr[i], i));
//   }

//   return returnedArray;
// };

// const fn = function plusone(n,i) {
//   return n + i;
// };

// console.log(map(arr, fn));

// let t = Date.now() * sleep(100).then(() => console.log(Date.now() - t)); // 100

// console.log("shubh");

// async function sleep(millis) {
//   return new Promise((resolve, reject) => {
//     setTimeout((millis) => {}, 1000);
//     return resolve;
//   });
// }

// const debounce = (func, wait) => {
//   let timerId;

//   return (...args) => {
//     clearTimeout(timerId);
//     timerId = setTimeout(() => func(...args), wait);
//   };
// };

// const callApi = (e) => {
//   console.log("callling Api", e.target.value);
// };

// const debouncedCallApi = debounce(callApi, 1000);

// console.log(debouncedCallApi);

// const delayedsum = (a, b) => {
//   return setTimeout(() => {
//     console.log(a + b);
//   }, 1000);
// };

// delayedsum(1, 2);

// let timerId;

// timerId = setTimeout(() => {
//   console.log("Task executed");
// }, 5000);

// setTimeout(() => {
//   clearTimeout(timerId);
//   console.log("task cancel");
// }, 2000);

// for (let i = 6; i >= 1; i--) {
//   setTimeout(
//     () => {
//       if (i === 1) {
//         console.log("Go!");
//       } else {
//         console.log(`${i - 1}`);
//       }
//     },
//     (7 - i) * 1000,
//   );
// }

// for (let i = 5; i >= 1; i--) {
//   setTimeout(() => {
//     console.log(`${i}`);
//   }, (7-i)*1000);
// }

// console.log("Start");

// setTimeout(() => {
//   console.log("Async");
// }, 0);

// console.log("End");

// for (let i = 1; i <= 3; i++) {
//   setTimeout(() => {
//     if (i === 1) {
//       console.log("Loading...");
//     } else if (i === 2) {
//       console.log("Fetching Data...");
//     } else {
//       console.log("Data Received");
//     }
//   }, i * 2000);
// }

// const data = ["Loading...", "validating Data...", "Data Received"];

// for (let i = 0; i < data.length; i++) {
//   setTimeout(
//     () => {
//       console.log(data[i]);
//     },
//     (i + 1) * 2000,
//   );
// }

// const task = () => {
//   if (Math.random() > 0.9) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const retryTask = function (task ,retries) {
//   let attempt = 1;

//   const execute = () => {
//     const success = task();

//     if (success) {
//       console.log(`Attempt ${attempt} is success`);
//       return;
//     }
//     console.log(`Attempt ${attempt} failed`);

//     if (attempt >= retries) {
//       console.log('all retries are exhausted');
//       return;
//     }

//     attempt++;
//     console.log("retrying in 1 second...");

//     setTimeout(() => {
//       execute();
//     }, 1000);
//   };

//   execute();
// };

// retryTask(task, 4);

// const wait = function () {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Done!");
//     }, ms);
//   });
// };

// wait(1000).then((message) => {
//   console.log(message);
// });

// const lights = [
//   { color: "red", delay: 3000 },
//   { color: "yellow", delay: 1000 },
//   { color: "green", delay: 2000 },
// ];

// const showLight = function (i) {
  
//   console.log(lights[i].color);

//   setTimeout(() => {
//     const nextIndex = (i + 1) % lights.length;

//     showLight(nextIndex);

//   }, lights[i].delay);

// };

// showLight(0);

u