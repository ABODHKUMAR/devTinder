const express = require("express");
const requestRouter = express.Router();
const {userAuth} = require("./../middlewares/auth");

requestRouter.post("/sendConnectionRequest", userAuth, async (req, res) => {
  try {
    const user = req.user;
    res.status(200).json({
      message: "Connection request sent successfully",
      user: user
    });
  } catch (error) {
    res.status(500).json({ message: "Error sending connection request", error: error.message });
  }
});

module.exports = requestRouter;
