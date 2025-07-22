const express = require('express');
const app = express();


app.get("/getUserData", (req, res) => {
  //logic to fetch user data
  // throw new Error("Error fetching user data");
  res.send("User Data Fetched");
});

app.use("/",(err, req, res, next)=>{
    if(err){
      console.error("Error occurred:", err.message);
      res.status(500).send("Internal Server Error");
    }
});

app.use("/products", (req, res,) => {
  // logic to fetch products
  try {
    throw new Error("Error fetching products");
    
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res.status(500).send("Internal Server Error");
    return;
    
  }
  res.send("Products Fetched");
});
app.listen(7777, () => {
  console.log('Server is running on port 7777...');
})