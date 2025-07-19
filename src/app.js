// console.log("starting new project");
const express = require('express');
const app = express();

// regex route matching example
// app.get(/a/, (req, res) => {
//   res.send('Hello, World!');
//   console.log("Received a GET request to /a/");
// });

// // it will match anystring that end with "fly"
// app.get(/.%fly$/, (req, res) => {
//   res.send('Hello, World! with regex ending');
//   console.log("Received a GET request to /.%fly$/");
// });

// // it will match "abc" or "ac"
// app.get("/ab?c", (req, res) => {
//   res.send('Hello, World!');
// });


// // it will match "abd" or "ac"
// app.get("/a(bd)?c", (req, res) => {
//   res.send('Hello, World! with optional b');
//   console.log("Received a GET request to /a(bd)?c");
// });


// // it will match "abbbc" or "ac"
// app.get("/ab+c", (req, res) => {
//   res.send('Hello, World! with one or more b');
//   console.log("Received a GET request to /ab+c");
// });


// // it will match "ac" or "abbbc" or "abbbbbc"
// app.get("/ab*c", (req, res) => {
//   res.send('Hello, World! with zero or more b');
//   console.log("Received a GET request to /ab*c");
// });

//http://0.0.0.0:7777/user?id=12322&password=testing // query parameters
// app.get("/user", (req, res) => {
//   const userId = req.query.id;
//   console.log(req.query)
//   if (userId) {
//     console.log(`Received a GET request to /user with id: ${userId}`);
//   } else {
//     console.log("Received a GET request to /user without id");
//   } 
//   res.send('Hello, World! with query parameter');
//   console.log("Received a GET request to /user?id=12345");
// });

//http://0.0.0.0:7777/user/12345 // params
// app.get("/user/:id", (req, res) => {
//   const userId = req.params.id;
//   console.log(req.params)
//   if (userId) {
//     console.log(`Received a GET request to /user with id: ${userId}`);
//   } else {
//     console.log("Received a GET request to /user without id");
//   } 
//   res.send('Hello, World! with path parameter');
//   console.log("Received a GET request to /user/12345");
// });


app.get("/user/:id/:name", (req, res) => {
  const userId = req.params.id;
  const userName = req.params.name;
  console.log(req.params);
  if (userId && userName) {
    console.log(`Received a GET request to /user with id: ${userId} and name: ${userName}`);
  }
  else {
    console.log("Received a GET request to /user without id or name");
  }
  res.send(`Hello, ${userName}! Your user ID is ${userId}.`);
  console.log(`Received a GET request to /user/${userId}/${userName}`);
} );

app.listen(7777, () => {
  console.log('Server is running on port 7777...');
});