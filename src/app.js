const express = require('express');
const app = express();

//GET /users ==> It checks all the app.xxx("matching routes") and returns the first one that matches
app.use("/", (req, res, next) => {
 // res.send('Hello from the root endpoint!');
  next();
});
app.use("/user", 
  (req, res, next) => {
    console.log('Middleware 1: Request received at /user');
    next();
  }

);
app.use("/user", 
  (req, res, next) => {
    console.log('Middleware 2: Processing request at /user');
    res.send('Hello from /user endpoint!');
  }
);

app.listen(7777, () => {
  console.log('Server is running on port 7777...');
})