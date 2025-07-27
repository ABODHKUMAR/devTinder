const express = require("express");
const requestRouter = express.Router();
const {userAuth} = require("./../middlewares/auth");
const ConnectionRequestModel = require("../models/connectionRequest");
import User from "../models/user";

requestRouter.post("/request/send/:status/:toUserId", userAuth, async (req, res) => {
  try {
    const fromUserId = req.user._id; 
    const { toUserId, status } = req.params;

    const allowStatuses = ['ignored', 'interested'];
    if (!allowStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid status provided" });
    }
    // Validate that the toUserId is a valid ObjectId
    const toUser = await User.findById(toUserId);
    if (!toUser) {
        return res.status(404).json({ message: "User not found" });
        }

    // Check if a request already exists
    const existingConnectionRequest = await ConnectionRequestModel.findOne({
        $or:[
            { fromUserId, toUserId },
            { fromUserId: toUserId, toUserId: fromUserId }
        ]
    });

    if(existingConnectionRequest) {
      return res.status(400).json({ message: req.user.firstName + " is " + status + " you" });
    }


    const connectionRequest = await connectionRequest.save({
        fromUserId,
        toUserId,
        status
    });

    res.status(200).json({
      message: "Connection request sent successfully",
      data: connectionRequest
    });
  } catch (error) {
    res.status(500).json({ message: "Error sending connection request", error: error.message });
  }
});

module.exports = requestRouter;
