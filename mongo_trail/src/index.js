const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const collection = require("./config");

const app = express();
//convert data into json fromat

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

//Use EJS/html as the view engine
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index1");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.post("/signup", async (req, res) => {
  const data = {
    name: req.body.name,
    password: req.body.password,
  };

  const userdata = await collection.insertMany(data);
  console.log(userdata);
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
