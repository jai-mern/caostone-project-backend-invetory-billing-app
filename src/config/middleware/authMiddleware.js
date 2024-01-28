// authMiddleware.js

// This middleware function checks if the user is authenticated
const isAuthenticated = (req, res, next) => {
    // Check if user is logged in (you may use session, token, or any other mechanism)
    if (req.user) {
        // User is authenticated, proceed to the next middleware or route handler
        next();
    } else {
        // User is not authenticated, send unauthorized status
        res.status(401).json({ message: "Unauthorized" });
    }
};

module.exports = {
    isAuthenticated
};
