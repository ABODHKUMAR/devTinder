// console.log("starting new project");
const express = require('express');
const app = express();

app.use("/hello/test",(req, res)=>{
    res.send('hi hi hi!');
})

app.use("/hello",(req, res)=>{
    res.send('hello hello hello!');
})


app.use("/test",(req,res)=>{
    res.send('hello from the server!');
})

app.use("/",(req, res)=>{
    res.send('Namaste All!');
})


app.listen(7777, () => {
  console.log('Server is running on port 7777...');
});