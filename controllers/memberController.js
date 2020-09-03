const Member = require("../models/memberSchema.js");

// Defining all methods and business logic for routes

module.exports = {
  findAll: function (req, res) {
    Member.find(req.query)
      .then((members) => res.json(members))
      .catch((err) => res.status(422).json(err));
    console.log("yo");
  },

  create: function (req, res) {
    Member.create(req.body)
      .then((newMember) => res.json(newMember))
      .catch((err) => res.status(422).json(err));
  },
};
