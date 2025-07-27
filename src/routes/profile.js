const express = require("express");
const profileRouter = express.Router();
const {userAuth} = require("./../middlewares/auth");

profileRouter.get("/profile", userAuth,async (req, res) => {

  try {
    const user = req.user;
    res.status(200).json({
      message: "Profile data",
      user: user
    });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving profile", error: error.message });
  }

});

module.exports = profileRouter;