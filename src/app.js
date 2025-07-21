const express = require('express');
const app = express();

app.use("/user", [
  (req, res, next) => {
    //this function is known as a route handler
    //it will handle all requests to the /user path , GET, POST, PUT, DELETE, etc.
     next(); // Call next() to pass control to the next middleware or route handler 
    // res.send("Route handler 1")
   // Call next() to pass control to the next middleware or route handler
  }],
  (req, res, next) =>{
    //this function is also a route handler
    //it will handle all requests to the /user path after the first handler
    res.send("Route handler 2")
    // next();
  }

);

app.listen(7777, () => {
  console.log('Server is running on port 7777...');
})