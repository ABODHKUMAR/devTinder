 const adminAuth = (req, res, next)=>{
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

const userAuth = (req, res, next)=>{
    console.log("Auth Middleware triggered for user routes");
    // logic to check if the request is authorized
    const token = "dsskadkakdsksa";
    const isAuthorized = token === "dsskadkakdsksa"; // Example token check
    if (isAuthorized) {
        next(); // Proceed to the next middleware or route handler
    } else {
        res.status(401).send("Unauthorized request");
    }
}

module.exports = {adminAuth, userAuth};