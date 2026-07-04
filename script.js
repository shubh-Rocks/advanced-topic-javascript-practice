// // // // const expect = function (val) {
// // // //   return {
// // // //     toBe: function (parentVal) {
// // // //       if (parentVal === val) {
// // // //         return { value: true };
// // // //       } else {
// // // //         throw new Error("not equal");
// // // //       }
// // // //     },
// // // //     notToBe: function (childVal) {
// // // //       if (childVal !== val) {
// // // //         return { value: true };
// // // //       } else {
// // // //         throw new Error("not equal");
// // // //       }
// // // //     },
// // // //   };
// // // // };

// // // // expect(4).toBe(4);

// // // // const arr = [1, 2, 3];

// // // // var map = function (arr, fn) {
// // // //   const returnedArray = [];

// // // //   for (let i = 0; i < arr.length; i++) {
// // // //     returnedArray.push(fn(arr[i], i));
// // // //   }

// // // //   return returnedArray;
// // // // };

// // // // const fn = function plusone(n,i) {
// // // //   return n + i;
// // // // };

// // // // // console.log(map(arr, fn));

// // // // const arr = [1, 2, 3];

// // // // var map = function (arr, fn) {
// // // //   const returnedArray = [];

// // // //   for (let i = 0; i < arr.length; i++) {
// // // //     returnedArray.push(fn(arr[i], i));
// // // //   }

// // // //   return returnedArray;
// // // // };

// // // // const fn = function plusone(n,i) {
// // // //   return n + i;
// // // // };

// // // // console.log(map(arr, fn));

// // // // let t = Date.now() * sleep(100).then(() => console.log(Date.now() - t)); // 100

// // // // console.log("shubh");

// // // // async function sleep(millis) {
// // // //   return new Promise((resolve, reject) => {
// // // //     setTimeout((millis) => {}, 1000);
// // // //     return resolve;
// // // //   });
// // // // }

// // // // const debounce = (func, wait) => {
// // // //   let timerId;

// // // //   return (...args) => {
// // // //     clearTimeout(timerId);
// // // //     timerId = setTimeout(() => func(...args), wait);
// // // //   };
// // // // };

// // // // const callApi = (e) => {
// // // //   console.log("callling Api", e.target.value);
// // // // };

// // // // const debouncedCallApi = debounce(callApi, 1000);

// // // // console.log(debouncedCallApi);

// // // // const delayedsum = (a, b) => {
// // // //   return setTimeout(() => {
// // // //     console.log(a + b);
// // // //   }, 1000);
// // // // };

// // // // delayedsum(1, 2);

// // // // let timerId;

// // // // timerId = setTimeout(() => {
// // // //   console.log("Task executed");
// // // // }, 5000);

// // // // setTimeout(() => {
// // // //   clearTimeout(timerId);
// // // //   console.log("task cancel");
// // // // }, 2000);

// // // // for (let i = 6; i >= 1; i--) {
// // // //   setTimeout(
// // // //     () => {
// // // //       if (i === 1) {
// // // //         console.log("Go!");
// // // //       } else {
// // // //         console.log(`${i - 1}`);
// // // //       }
// // // //     },
// // // //     (7 - i) * 1000,
// // // //   );
// // // // }

// // // // for (let i = 5; i >= 1; i--) {
// // // //   setTimeout(() => {
// // // //     console.log(`${i}`);
// // // //   }, (7-i)*1000);
// // // // }

// // // // console.log("Start");

// // // // setTimeout(() => {
// // // //   console.log("Async");
// // // // }, 0);

// // // // console.log("End");

// // // // for (let i = 1; i <= 3; i++) {
// // // //   setTimeout(() => {
// // // //     if (i === 1) {
// // // //       console.log("Loading...");
// // // //     } else if (i === 2) {
// // // //       console.log("Fetching Data...");
// // // //     } else {
// // // //       console.log("Data Received");
// // // //     }
// // // //   }, i * 2000);
// // // // }

// // // // const data = ["Loading...", "validating Data...", "Data Received"];

// // // // for (let i = 0; i < data.length; i++) {
// // // //   setTimeout(
// // // //     () => {
// // // //       console.log(data[i]);
// // // //     },
// // // //     (i + 1) * 2000,
// // // //   );
// // // // }

// // // // const task = () => {
// // // //   if (Math.random() > 0.9) {
// // // //     return true;
// // // //   } else {
// // // //     return false;
// // // //   }
// // // // };

// // // // const retryTask = function (task ,retries) {
// // // //   let attempt = 1;

// // // //   const execute = () => {
// // // //     const success = task();

// // // //     if (success) {
// // // //       console.log(`Attempt ${attempt} is success`);
// // // //       return;
// // // //     }
// // // //     console.log(`Attempt ${attempt} failed`);

// // // //     if (attempt >= retries) {
// // // //       console.log('all retries are exhausted');
// // // //       return;
// // // //     }

// // // //     attempt++;
// // // //     console.log("retrying in 1 second...");

// // // //     setTimeout(() => {
// // // //       execute();
// // // //     }, 1000);
// // // //   };

// // // //   execute();
// // // // };

// // // // retryTask(task, 4);

// // // // const wait = function () {
// // // //   return new Promise((resolve, reject) => {
// // // //     setTimeout(() => {
// // // //       resolve("Done!");
// // // //     }, ms);
// // // //   });
// // // // };

// // // // wait(1000).then((message) => {
// // // //   console.log(message);
// // // // });

// // // // const lights = [
// // // //   { color: "red", delay: 3000 },
// // // //   { color: "yellow", delay: 1000 },
// // // //   { color: "green", delay: 2000 },
// // // // ];

// // // // const showLight = function (i) {

// // // //   console.log(lights[i].color);

// // // //   setTimeout(() => {
// // // //     const nextIndex = (i + 1) % lights.length;

// // // //     showLight(nextIndex);

// // // //   }, lights[i].delay);

// // // // };

// // // // showLight(0);

// // // // function createUser(firstName, lastName, age) {
// // // //   const user = {
// // // //     firstName,
// // // //     lastName,
// // // //     age,
// // // //     getUserAge() {
// // // //       return new Date().getFullYear() - user.age;
// // // //     },
// // // //   };
// // // //   return user;
// // // // }
// // // // const user1 = createUser("shubh", "mishra", 21);
// // // // console.log(user1);
// // // // console.log(user1.getUserAge());
// // // // Array.prototype.last = function() {

// // // //      for(let i = 0; i<this.length; i++){
// // // //         if(this.length===i){
// // // //             return this[i]
// // // //         }
// // // //     }

// // // // };

// // // //  const arr = [1, 2, 3];
// // // //   arr.last();

// // // var join = function (arr1, arr2) {
// // //   const result = {};

// // //   for (let i = 0; i < arr1.length; i++) {
// // //     result[arr1[i].id] = arr1[i];
// // //   }

// // //   for (let i = 0; i < arr2.length; i++) {
// // //     if (result[arr2[i].id]) {
// // //       for (const key in arr2[i]) result[arr2[i].id][key] = arr2[i][key];
// // //     }

// // //     else {
// // //       result[arr2[i].id] = arr2[i];
// // //     }

// // //   }

// // //   return Object.values(result);
// // // };

// // // const arr1 = [{ id: 3, x: 5 }];
// // // const arr2 = [
// // //   { id: 1, x: 6 },
// // //   { id: 2, x: 7 },
// // // ];

// // // console.log(join(arr1,arr2));

// // // new  AbortController()

// // // function updateInventory(currentInventory, newShipment) {
// // //   const inventoryMap = {};

// // //   for (let i = 0; i < currentInventory.length; i++) {
// // //     let item = currentInventory[i];
// // //     inventoryMap[item.itemName] = item;
// // //   }

// // //   for (let i = 0; i < newShipment.length; i++) {
// // //     let newItem = newShipment[i];
// // //     let name = newItem.itemName;
// // //     if (inventoryMap[name]) {
// // //       inventoryMap[name].quantity += newItem.quantity;
// // //     } else {
// // //       inventoryMap[name] = newItem;
// // //     }
// // //   }
// // //   return Object.values(inventoryMap).sort((a,b)=>a.itemName.localeCompare(b.itemName))
// // // }

// // // const currentInventory = [
// // //   { itemName: "Milk", quantity: 5 },
// // //   { itemName: "Bread", quantity: 2 },
// // //   { itemName: "Apple", quantity: 10 },
// // // ];

// // // const newShipment = [
// // //   { itemName: "Bread", quantity: 5 },
// // //   { itemName: "Orange", quantity: 8 },
// // //   { itemName: "Milk", quantity: 2 },
// // // ];

// // // console.log(updateInventory(currentInventory, newShipment));

// // function analyzeProductivity(employees, tasks) {
// //   const analyzeProductivityMap = {};

// //   for (let i = 0; i < employees.length; i++) {
// //     let uid = employees[i];
// //     analyzeProductivityMap[uid.id] = { ...uid, totalHours: 0 };
// //   }

// //   for (let i = 0; i < tasks.length; i++) {
// //     if (
// //       analyzeProductivityMap[tasks[i].empId] &&
// //       tasks[i].status === "completed"
// //     ) {
// //       analyzeProductivityMap[tasks[i].empId].totalHours += tasks[i].hours;
// //     }
// //   }

// //   return Object.values(analyzeProductivityMap).sort((a, b) => {
// //     if (a.totalHours === b.totalHours) {
// //       return a.name.localeCompare(b.name);
// //     } else {
// //       return b.totalHours - a.totalHours;
// //     }
// //   });
// // }
// // const employees = [
// //   { id: 1, name: "Zara" },
// //   { id: 2, name: "Alex" },
// //   { id: 3, name: "John" },
// //   { id: 4, name: "Bob" },
// // ];

// // const tasks = [
// //   { empId: 2, hours: 5, status: "completed" },
// //   { empId: 1, hours: 3, status: "pending" }, // Ignored: not completed
// //   { empId: 2, hours: 3, status: "completed" }, // Alex total = 8
// //   { empId: 1, hours: 8, status: "completed" }, // Zara total = 8
// //   { empId: 3, hours: 5, status: "completed" }, // John total = 5
// //   // Bob has no tasks, so Bob total = 0
// // ];

// // console.log(analyzeProductivity(employees, tasks));

// // console.log(Math.round(10.6))

// // let a = 2.45539039423

// // console.log(a.toFixed(5))

// // console.log(Math.floor(Math.random()*900000+100000))

// // let length = 13;

// // let breadth = 12;

// // console.log(length * breadth);

// // let r = 145;

// // console.log(2 * Math.PI * r*r);

// // class Person {
// //   constructor(name) {
// //     this.name = name;
// //   }

// //   introduce() {
// //     console.log("hi my name is :", this.name);
// //   }
// // }

// // const p1 = new Person("shubh");

// // console.log(p1.introduce());

// // class Rectangle {
// //   constructor(length, breadth) {
// //     this.length = length;
// //     this.breadth = breadth;
// //   }

// //   area() {
// //     return this.length * this.breadth;
// //   }
// // }

// // const a1 = new Rectangle(10, 5);console.log(a1.area());

// // class Circle {
// //   constructor(radius) {
// //     this.radius = radius;
// //   }

// //   circumference() {
// //     return 2 * Math.PI * this.radius;
// //   }
// // }

// // const c = new Circle(7);

// // console.log(c.circumference());

// // class Student {
// //   constructor(name, marks) {
// //     this.name = name;
// //     this.marks = marks;
// //   }

// //   ispassed(marks) {
// //     if(!marks >= 35) {
// //       return false;
// //     } else {
// //       return true;
// //     }
// //   }
// // }

// // const p = new Student("shubh", 35);

// // console.log(p.ispassed());

// class BankAccount {
//   constructor(owner, balance) {
//     this.owner = owner;
//     this.balance = balance;
//   }

//   deposit(amount) {
//     return (this.balance += amount);
//   }

//   withdraw(amount) {
//     return (this.balance -= amount);
//   }
// }

// const account = new BankAccount("shubh", 1000);

// account.deposit(100);
// account.withdraw(500);

// console.log(account.balance);
