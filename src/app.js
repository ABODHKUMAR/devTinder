const express = require('express');
const app = express();
const {adminAuth, userAuth} = require('./middlewares/auth');
//handle Auth Middleware for all requests, all, GET, POST, PUT, DELETE
app.use("/admin", adminAuth);
app.use("/user", userAuth);


app.get("/admin/getAllData", (req, res) => {
    //logic to fetching all data from the database
  // if the request is authorized, proceed to fetch data
  // const token = "xyz123"; 
  // const isAdminAuthorized =  token === "xyz123"; // Example token check
  // if (isAdminAuthorized) {
  //   res.send("All Data Fetched");
  // } else {
  //   res.status(401).send("Unauthorized request");
  // }

  res.send("All Data Fetched");


});

app.get("/admin/deleteUser", (req, res) => {
  //logic to delete a user from the database
  res.send("User Deleted");
});

app.get("/user", (req, res) => {
  //logic to fetch user data
  res.send("User Data Fetched");
});

app.listen(7777, () => {
  console.log('Server is running on port 7777...');
})