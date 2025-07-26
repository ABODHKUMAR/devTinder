const express = require("express");
const app = express();
const connectDB = require("./config/database");
const User = require("./models/user");

app.use(express.json());
app.get("/", (req, res, next) => {
  res.send("Hello world");
})
app.post("/signup", async (req, res) => {

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

app.get("/users", async (req, res) => {
  const userEmail = req.body.emailId;
  try {
    const user = await User.findOne({ emailId: userEmail });
    if (!user) {
      return res.status(404).json({ message: "No user found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving users", error: error.message });
  }
});

app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    if (users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    res.send(users);
    res.status(200).send(users);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving feed", error: error.message });
  }
});

app.delete("/user", async (req, res) => {
  const userId = req.body.userId;

  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({ message: "No user found" });
    }
    res.status(200).json({ message: "User deleted successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error: error.message });
  }
});

//update the data of the user
app.patch("/user/:userId", async (req, res) => {
  const data = req.body;
  const userId = req.params?.userId;
  try {
    const ALLOWED_UPDATES = ["password", "photoUrl", "about", "skills"];
    const isUpdateAllowed = Object.keys(data).every((key) => ALLOWED_UPDATES.includes(key));
    if (!isUpdateAllowed) {
       throw new Error("Invalid update fields");
    }
    if (data.skills.length > 10) {
      throw new Error("Skills cannot exceed 10 items");
    }
    const user = await User.findByIdAndUpdate({ _id: userId }, data, { returnDocument: "after", runValidators: true });
    if (!user) {
      return res.status(404).json({ message: "No user found" });
    }
    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Error updating user", error: error.message });
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
