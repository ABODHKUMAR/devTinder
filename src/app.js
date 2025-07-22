const express = require("express");
const app = express();
const connectDB = require("./config/database");
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  // const userObject = {
  //   firstName: "John",
  //   lastName: "Doe",
  //   emailId: "john.doe@example.com",
  //   password: "password123",
  //   age: 30,
  //   gender: "male"
  // };

  //createing a new user instance of the User model
  // const user = new User(userObject);

  const user = new User({
    firstName: "Sachin",
    lastName: "Tendulkar",
    emailId: "sachin.tendulkar@example.com",
    password: "password123",
    age: 30,
    gender: "male",
  });

  try {
    await user.save();
    res.status(201).json({
      message: "User created successfully",
      user: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Validation failed",
      errors: error.errors,
    });
  }
});

connectDB()
  .then(() => {
    app.listen(7777, () => {
      console.log("Server is running on port 7777...");
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });
