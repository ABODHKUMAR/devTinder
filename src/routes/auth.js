const express = require("express");
const authRouter = express.Router();

authRouter.post("/signup", async (req, res) => {

  const user = new User(req.body);
  console.log(user);

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

module.exports = authRouter;