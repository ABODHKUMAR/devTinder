// console.log("starting new project");
const express = require('express');
const app = express();

app.use("/user", (req, res, next) => {
    console.log("Middleware for /user");
    res.send({
      message: "Hello from the middleware!"
    });
});

//This will only handle GET call to '/user'
app.get("/user",(req,res)=>{
    res.send({
      name: "John Doe",
      age: 30,
      email: "john.doe@example.com"
    });
})

app.post("/user", (req, res) => {
    console.log("Received a POST request to /user");
    res.send({  
      message: "User created successfully!"
    }); 
});

app.delete("/user", (req, res) => {
    console.log("Received a DELETE request to /user");
    res.send({
      message: "User deleted successfully!"
    });
});

// this will match all the HTTP methods API calls to /test
app.use("/test",(req,res)=>{
    res.send('hello from the server!');
})



app.listen(7777, () => {
  console.log('Server is running on port 7777...');
});