const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/Login-tut2");

//check out connection
connect
  .then(() => {
    console.log("Database connect successfully");
  })
  .catch(() => {
    console.log("Datanase cannot be connexted");
  });

//create schema

const loginschema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

// collect part
const collection = new mongoose.model("users", loginschema);

module.exports = collection;
