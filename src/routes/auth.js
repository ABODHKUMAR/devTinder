const express = require("express");
const authRouter = express.Router();
const { validateSignUpData } = require("../utils/validation");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

authRouter.post("/signup", async (req, res) => {

  try {
    //validation of data
    validateSignUpData(req);

    const { firstName, lastName, emailId, password } = req.body;

    //hashing the password
    const passwordHash = await bcrypt.hash(password, 10);


    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash
    });
    console.log(user);


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



authRouter.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;

    if (!emailId || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // Find user by email
    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      throw new Error("  EmailId or password is incorrect");
    }
    const isPasswordValid =  await user.validatePassword(password);

    if (!isPasswordValid) {
      throw new Error("  EmailId or password is incorrect");
    }

    if (isPasswordValid) {

      const token = await user.getJWT();
      // If password is valid, return success response
      res.cookie("token", token);

      res.status(200).json({ message: "Login successful", user });
    }


  } catch (error) {
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
});

authRouter.post("/logout", (req, res) => {
  try {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
    });
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    res.status(500).json({ message: "Error logging out", error: error.message });
  }
});

module.exports = authRouter;