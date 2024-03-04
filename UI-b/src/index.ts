const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const { collection, new_comment, feedback } = require("./config");

const app = express();
//convert data into json fromat

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

//Use EJS/html as the view engine
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/create_user", (req, res) => {
  res.render("create_user");
});

app.get("/Index6", (req, res) => {
  res.render("Index6");
});

app.get("/Index7", (req, res) => {
  res.render("Index7");
});

app.post("/Index6", async (req, res) => {
  const comment_data = {
    comment_name: req.body.comment_name,
    comment: req.body.comment,
  };
  const commentdata = await new_comment.insertMany(comment_data);
  console.log(commentdata);
});

app.post("/create_user", async (req, res) => {
  const data = {
    name: req.body.name,
    password: req.body.password,
  };

  //check if the user already exists
  const existinguser = await collection.findOne({ name: data.name });

  if (existinguser) {
    return res.status(400).send("User already exists");
  } else {
    //hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(data.password, saltRounds);
    data.password = hashedPassword;
    const userdata = await collection.insertMany(data);
    console.log(userdata);
  }
});

app.post("/Index7", async (req, res) => {
  const feedback_data = {
    feedback_name: req.body.feedback_name,
    email: req.body.email,
    message: req.body.message,
  };

  try {
    const userfeedback_data = await feedback.create(feedback_data);
    console.log(userfeedback_data);
    res.send("Feedback added successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error adding feedback");
  }
});

app.post("/index", async (req, res) => {
  try {
    const check = await collection.findOne({ name: req.body.name });
    if (!check) {
      return res.status(400).send("User not found");
    }
    const ispasswordMatch = await bcrypt.compare(
      req.body.password,
      check.password
    );
    if (ispasswordMatch) {
      res.render("index1");
    } else {
      req.status(400).send("Invalid password");
    }
  } catch {
    res.send("wrong details");
  }
});

const port = 7000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
