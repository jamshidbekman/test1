// // Task 1

// function randomNumberPromise() {
//     return new Promise((resolve, reject)=> {
//         let randomNumber = Math.trunc(Math.random()*10)
//         setTimeout(() => {
//             resolve(randomNumber)
//         }, 2000);
//     })
// }

// async function getRandomNumber() {
//     console.log('Kuting...')
//     const res = await randomNumberPromise()
//     console.log(res)
// }
// getRandomNumber()

// // Task 2

// const user = {
//   username: "12345",
//   password: "password",
// };
// function loginPromise(user, username, password) {
//   return new Promise((resolve, reject) => {
//     if (user.username == username && user.password == password) {
//       setTimeout(() => {
//         resolve("Xush kelibsiz");
//       }, 1000);
//     } else {
//       reject("Login yoki parol xato");
//     }
//   });
// }

// async function checkLogin(username, password) {
//   try {
//     let res = await loginPromise(user, username, password);
//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// }
// checkLogin("12345", "password");

// // Task 3

// function counterPromise() {
//     return new Promise((resolve, reject) => {
//         let count = 0
//         const interval = setInterval(() => {
//             count++
//             console.log(`${count}-sekund`)
//             if (count == 5) {
//                 clearInterval(interval)
//                 resolve('Tugadi')
//             }
//         }, 1000);
//     })
// }

// async function startCounting() {
//     let res = await counterPromise()
//     console.log(res)
// }
// startCounting()

// // Task 4

// function addPointPromise(ball1, ball2) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(ball1+ball2)
//         }, 2000);
//     })
// }

// async function addPoint(ball1, ball2) {
//     let res = await addPointPromise(ball1, ball2)
//     console.log(res)
// }
// addPoint(100, 50)

// // Task 5

// function checkNamePromise(name) {
//   return new Promise((resolve, reject) => {
//     if (name.length >= 3) {
//       resolve("To'g'ri");
//     } else {
//       reject("Xato");
//     }
//   });
// }

// async function checkName(name) {
//   try {
//     let response = await checkNamePromise(name);
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// checkName("Ali");

// // Task 6

// const colors = ["qizil", "yashil", "ko'k", "oq", "qora"];

// function getColorPromise(color) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (colors.includes(color)) {
//         resolve(`Rang: ${color}`);
//       } else {
//         reject("Bunday rang yo'q");
//       }
//     }, 1000);
//   });
// }

// async function getColor(color) {
//   try {
//     const result = await getColorPromise(color);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getColor("qizil");
// getColor("sapsar");

// // Task 7

// function checkNumberPromise(phoneNumber) {
//   return new Promise((resolve, reject) => {
//     if (phoneNumber.slice(0, 4) == "+998") {
//       setTimeout(() => {
//         resolve("Raqam to'g'ri");
//       }, 1000);
//     } else {
//       reject("Raqam noto'g'ri");
//     }
//   });
// }

// async function checkPhoneNumber(phoneNumber) {
//   try {
//     let res = await checkNumberPromise(phoneNumber);
//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// }
// checkPhoneNumber("+998975975300");

// // Task 8

// const colors = ["qizil", "yashil", "ko'k", "oq", "qora", "sariq"];

// let colorPromise = new Promise((resolve, reject) => {
//   let randomColor = colors[Math.trunc(Math.random() * colors.length)];
//   setTimeout(() => {
//     resolve(randomColor);
//   }, 1000);
// });

// async function getRandomColor() {
//   let res = await colorPromise;
//   console.log(res);
// }

// getRandomColor();
