var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var express = require("express");
var app = express();
var mongoose = require("mongoose");
var Comments = require("./models/commentModels");
var Blog = require("./models/blogModeles");
var Contact = require("./models/contactModel");
var Login = require("./models/loginModeles");
var bcrypt = require("bcrypt");
app.use(express.json());
process.env.ACCESS_TOKEN_SECRET = "your-secret-key";
var verifyAccessToken = require("./auth").verifyAccessToken;
var generateAccessToken = require("./auth").generateAccessToken;
var _a = require("./auth"), generateAccessToken = _a.generateAccessToken, generateRefreshToken = _a.generateRefreshToken, verifyAccessToken = _a.verifyAccessToken;
require("dotenv").config();
//routes
app.get("/", function (req, res) {
    res.send("Hello Eldad API");
});
// -----------------------------------COMMENTS-------------------------------------------------------------
app.post("/Comments", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var blog_id, comment, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                blog_id = req.body.blog_id;
                return [4 /*yield*/, Comments.create(req.body)];
            case 1:
                comment = _a.sent();
                return [4 /*yield*/, Blog.findByIdAndUpdate(blog_id, { $push: { comments: comment._id } })];
            case 2:
                _a.sent();
                res.status(200).json({ comment: comment });
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.log(error_1.message);
                res.status(500).json({ message: "Server Error" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.get("/Comments", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var comments, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Comments.find()];
            case 1:
                comments = _a.sent();
                res.status(200).json({ comments: comments });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.log(error_2.message);
                res.status(500).json({ message: "Server Error" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.get("/Comments/:id", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var id, comments, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, Comments.findById(id)];
            case 1:
                comments = _a.sent();
                res.status(200).json(comments);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                res.status(500).json({ message: error_3.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.delete("/Comments/:id", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var id, comments, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, Comments.findByIdAndDelete(id)];
            case 1:
                comments = _a.sent();
                res.status(200).json(comments);
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                res.status(500).json({ message: error_4.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// -----------------------------------Blogs-------------------------------------------------------------
app.post("/Blog", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var blog, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Blog.create(req.body)];
            case 1:
                blog = _a.sent();
                res.status(200).json({ blog: blog });
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                console.log(error_5.message);
                res.status(500).json({ message: "No blog Server Error" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//find blog by id
app.get("/Blog/:id", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var id, blog, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, Blog.findById(id).populate("comments")];
            case 1:
                blog = _a.sent();
                res.status(200).json(blog);
                return [3 /*break*/, 3];
            case 2:
                error_6 = _a.sent();
                res.status(500).json({ message: error_6.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//get all blogs
app.get("/Blog", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var blogs, error_7;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Blog.find()];
            case 1:
                blogs = _a.sent();
                res.status(200).json({ blogs: blogs });
                return [3 /*break*/, 3];
            case 2:
                error_7 = _a.sent();
                console.log(error_7.message);
                res.status(500).json({ message: "Server Error" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//update blog
app.put("/Blog/:id", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var id, blog, updatedblog, error_8;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                id = req.params.id;
                return [4 /*yield*/, Blog.findByIdAndUpdate(id, req.body)];
            case 1:
                blog = _a.sent();
                if (!blog) {
                    return [2 /*return*/, res
                            .status(404)
                            .json({ message: "Cannot find any blog with ID ".concat(id) })];
                }
                return [4 /*yield*/, Blog.findById(id)];
            case 2:
                updatedblog = _a.sent();
                res.status(200).json(updatedblog);
                return [3 /*break*/, 4];
            case 3:
                error_8 = _a.sent();
                console.log(error_8.message);
                res.status(500).json({ message: "Internal server error" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
//delete blog
app.delete("/Blog/:id", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var id, blog, error_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, Blog.findByIdAndDelete(id)];
            case 1:
                blog = _a.sent();
                res.status(200).json(blog);
                return [3 /*break*/, 3];
            case 2:
                error_9 = _a.sent();
                res.status(500).json({ message: error_9.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// -----------------------------------CONTACT -------------------------------------------------------------
app.post("/Contact", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var contact, error_10;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Contact.create(req.body)];
            case 1:
                contact = _a.sent();
                res.status(200).json({ contact: contact });
                return [3 /*break*/, 3];
            case 2:
                error_10 = _a.sent();
                console.log(error_10.message);
                res.status(500).json({ message: "No Contact Server Error" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// edit contact
app.put("/Contact/:id", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var id, contact, updatedcontact, error_11;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                id = req.params.id;
                return [4 /*yield*/, Contact.findByIdAndUpdate(id, req.body)];
            case 1:
                contact = _a.sent();
                if (!contact) {
                    return [2 /*return*/, res
                            .status(404)
                            .json({ message: "Cannot find any contact with ID ".concat(id) })];
                }
                return [4 /*yield*/, Contact.findById(id)];
            case 2:
                updatedcontact = _a.sent();
                res.status(200).json(updatedcontact);
                return [3 /*break*/, 4];
            case 3:
                error_11 = _a.sent();
                console.log(error_11.message);
                res.status(500).json({ message: "Internal server error" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// get all contacts
app.get("/Contact", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var contacts, error_12;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Contact.find()];
            case 1:
                contacts = _a.sent();
                res.status(200).json({ contacts: contacts });
                return [3 /*break*/, 3];
            case 2:
                error_12 = _a.sent();
                console.log(error_12.message);
                res.status(500).json({ message: "Server Error" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//find contact by id
app.get("/Contact/:id", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var id, contact, error_13;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, Contact.findById(id)];
            case 1:
                contact = _a.sent();
                res.status(200).json(contact);
                return [3 /*break*/, 3];
            case 2:
                error_13 = _a.sent();
                res.status(500).json({ message: error_13.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//delete contact
app.delete("/Contact/:id", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var id, contact, error_14;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, Contact.findByIdAndDelete(id)];
            case 1:
                contact = _a.sent();
                res.status(200).json(contact);
                return [3 /*break*/, 3];
            case 2:
                error_14 = _a.sent();
                res.status(500).json({ message: error_14.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// -----------------------------------Signup and login -------------------------------------------------------------
// Sign Up Route
app.post("/signup", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var _a, user_name, user_password, existingUser, hashedPassword, newUser, error_15;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                _a = req.body, user_name = _a.user_name, user_password = _a.user_password;
                return [4 /*yield*/, Login.findOne({ user_name: user_name })];
            case 1:
                existingUser = _b.sent();
                if (existingUser) {
                    return [2 /*return*/, res.status(400).json({ message: "User already exists" })];
                }
                return [4 /*yield*/, bcrypt.hash(user_password, 10)];
            case 2:
                hashedPassword = _b.sent();
                return [4 /*yield*/, Login.create({
                        user_name: user_name,
                        user_password: hashedPassword, // Store only the hashed password in the database
                    })];
            case 3:
                newUser = _b.sent();
                res.status(201).json({ message: "User created successfully" });
                return [3 /*break*/, 5];
            case 4:
                error_15 = _b.sent();
                console.error(error_15);
                res.status(500).json({ message: "Server Error" });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
// Login Route
// Login Route
app.post("/login", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var _a, user_name, user_password, user, passwordMatch, accessToken, refreshToken, error_16;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                _a = req.body, user_name = _a.user_name, user_password = _a.user_password;
                return [4 /*yield*/, Login.findOne({ user_name: user_name }).select("+user_password")];
            case 1:
                user = _b.sent();
                if (!user) {
                    return [2 /*return*/, res.status(400).json({ message: "Invalid credentials" })];
                }
                return [4 /*yield*/, bcrypt.compare(user_password, user.user_password)];
            case 2:
                passwordMatch = _b.sent();
                if (!passwordMatch) {
                    return [2 /*return*/, res.status(400).json({ message: "Invalid credentials" })];
                }
                accessToken = generateAccessToken(user._id);
                refreshToken = generateRefreshToken(user._id);
                // Save refresh token in the database
                user.refreshToken = refreshToken;
                return [4 /*yield*/, user.save()];
            case 3:
                _b.sent();
                res.status(200).json({ accessToken: accessToken, refreshToken: refreshToken });
                return [3 /*break*/, 5];
            case 4:
                error_16 = _b.sent();
                console.error(error_16);
                res.status(500).json({ message: "Server Error" });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
//get all users
app.get("/Login", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var users, error_17;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Login.find().select("-user_password")];
            case 1:
                users = _a.sent();
                res.status(200).json({ users: users });
                return [3 /*break*/, 3];
            case 2:
                error_17 = _a.sent();
                console.log(error_17.message);
                res.status(500).json({ message: "Server Error" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//delete user by id
app.delete("/Login/:id", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var id, user, error_18;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, Login.findByIdAndDelete(id)];
            case 1:
                user = _a.sent();
                res.status(200).json(user);
                return [3 /*break*/, 3];
            case 2:
                error_18 = _a.sent();
                res.status(500).json({ message: error_18.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//get user by id
app.get("/Login/:id", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var id, user, error_19;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, Login.findById(id).select("-user_password")];
            case 1:
                user = _a.sent();
                res.status(200).json(user);
                return [3 /*break*/, 3];
            case 2:
                error_19 = _a.sent();
                res.status(500).json({ message: error_19.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//update user by id
// Update user by id
app.put("/Login/:id", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var id, user_password, hashedPassword, user, error_20;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                id = req.params.id;
                user_password = req.body.user_password;
                return [4 /*yield*/, bcrypt.hash(user_password, 10)];
            case 1:
                hashedPassword = _a.sent();
                return [4 /*yield*/, Login.findByIdAndUpdate(id, { user_password: hashedPassword }, { new: true } // Return the updated document
                    ).select("-user_password")];
            case 2:
                user = _a.sent();
                if (!user) {
                    return [2 /*return*/, res
                            .status(404)
                            .json({ message: "Cannot find any user with ID ".concat(id) })];
                }
                res.status(200).json(user);
                return [3 /*break*/, 4];
            case 3:
                error_20 = _a.sent();
                console.log(error_20.message);
                res.status(500).json({ message: "Internal server error" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// --------------------------------------likes-------------------------------------------------------------
app.put("/Blog/like/:id", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var id, userId, blog, updatedBlog, error_21;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                id = req.params.id;
                userId = req.body.userId;
                return [4 /*yield*/, Blog.findById(id)];
            case 1:
                blog = _a.sent();
                if (blog.likedBy.includes(userId)) {
                    return [2 /*return*/, res
                            .status(400)
                            .json({ message: "You have already liked this blog" })];
                }
                return [4 /*yield*/, Blog.findByIdAndUpdate(id, {
                        $inc: { likes: 1 },
                        $push: { likedBy: userId },
                    }, { new: true })];
            case 2:
                updatedBlog = _a.sent();
                res.status(200).json(updatedBlog);
                return [3 /*break*/, 4];
            case 3:
                error_21 = _a.sent();
                console.log(error_21.message);
                res.status(500).json({ message: "Internal server error" });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// -----------------------------------CONNNECTION-------------------------------------------------------------
app.listen(4000, function () {
    console.log("Server is running on port 4000");
});
mongoose
    .connect("mongodb+srv://admin:Papamama213@mybrandeldad.lzhxbzt.mongodb.net/")
    .then(function () { return console.log("Connected!"); })
    .catch(function (err) { return console.error("Connection error:", err); });
