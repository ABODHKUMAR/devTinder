// console.log("starting new project");
const express = require('express');
const app = express();
app.use((req, res)=>{
    res.send('Hello, World! at /');
})

app.use("/hello",(req,res)=>{
    res.send('Hello, Hello');
})

app.use("/test",(req, res)=>{
    res.send('Hello, World!');
})
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});