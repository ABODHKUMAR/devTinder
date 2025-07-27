const express = require("express");
const profileRouter = express.Router();
const {userAuth} = require("./../middlewares/auth");
const { validateEditProfileData } = require("../utils/validation");

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

profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
  try {
    // Get the user from the request object
    if(validateEditProfileData(req)) {
        return res.status(400).json({
            message: "Validation failed",
            errors: "Invalid data provided"
        });
    }
    const loggedInUser = req.user;

    Object.keys(req.body).forEach((key) => {
      loggedInUser[key] = req.body[key];
    });

    await loggedInUser.save();

    res.status(200).json({
      message: "Profile updated successfully",
      user: user
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating profile", error: error.message });
  }

});

module.exports = profileRouter;