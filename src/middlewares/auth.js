const User = require("../models/user");
const jwt = require("jsonwebtoken");
const adminAuth = (req, res, next) => {
    console.log("Auth Middleware triggered for admin routes");
    // logic to check if the request is authorized
    const token = "dsskadkakdsksa";
    const isAuthorized = token === "dsskadkakdsksa"; // Example token check
    if (isAuthorized) {
        next(); // Proceed to the next middleware or route handler
    } else {
        res.status(401).send("Unauthorized request");
    }
}

const userAuth = async (req, res, next) => {

    try {
        //read the token from cookies
        const { token } = req.cookies;
        const decodedObj = jwt.verify(token, "DEV@Tindeer$790");

        const { _id } = decodedObj;

        const user = await User.findById(_id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        // Attach user to the request object
        req.user = user;
        next();
    } catch (error) {
        console.error("Authentication error:", error);
        res.status(401).json({ message: "Unauthorized request", error: error.message });
    }
};

module.exports = { adminAuth, userAuth };