// server.js
const express = require("express");
const app = express();
var cors = require("cors");
var bodyparser = require("body-parser");
app.use(cors());
app.options("*", cors());
const routes = require("./routes");

const path = require("path");
const PORT = process.env.PORT || 5000;


// require db connection
require('./models');

// configure body parser for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


// Bootstrap server
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}.`);
});