// models/index.js

// We are importing the same database URI string that we just exported in config.

const mongoose = require("mongoose");
const URI = require("../config/index");

mongoose.connect(process.env.MONGODB_URI || URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// When successfully connected
mongoose.connection.on("connected", () => {
  console.log("Established Mongoose Default Connection");
});

// When connection throws an error
mongoose.connection.on("error", (err) => {
  console.log("Mongoose Default Connection Error : " + err);
});
