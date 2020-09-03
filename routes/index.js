const router = require("express").Router();
const membersRoutes = require("./members");
const path = require("path");
//I am adding a prefix /api/books before the routes.
//This way, you can only access them as http://localhost:5000/api/games.

//API routes
router.use("/api/members", membersRoutes);

// If no API routes are hit, send the React app

module.exports = router;
