var mongoose = require("mongoose");
var connect = mongoose.connect("mongodb://localhost:27017/Portfolio_login");
//check out connection
connect
    .then(function () {
    console.log("Database connect successfully");
})
    .catch(function () {
    console.log("Database cannot be connexted");
});
//create schema
var loginschema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        required: true,
    },
});
var comment_section_schema = new mongoose.Schema({
    comment_name: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
});
var feedback_schema = new mongoose.Schema({
    feedback_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
});
// collect part
var collection = new mongoose.model("users", loginschema);
var new_comment = new mongoose.model("comment", comment_section_schema);
var feedback = new mongoose.model("feedback", feedback_schema);
module.exports = {
    collection: collection,
    new_comment: new_comment,
    feedback: feedback,
};
