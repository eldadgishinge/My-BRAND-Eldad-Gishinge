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
var path = require("path");
var bcrypt = require("bcrypt");
var _a = require("./config"), collection = _a.collection, new_comment = _a.new_comment, feedback = _a.feedback;
var app = express();
//convert data into json fromat
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//Use EJS/html as the view engine
app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/", function (req, res) {
    res.render("index");
});
app.get("/create_user", function (req, res) {
    res.render("create_user");
});
app.get("/Index6", function (req, res) {
    res.render("Index6");
});
app.get("/Index7", function (req, res) {
    res.render("Index7");
});
app.post("/Index6", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var comment_data, commentdata;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                comment_data = {
                    comment_name: req.body.comment_name,
                    comment: req.body.comment,
                };
                return [4 /*yield*/, new_comment.insertMany(comment_data)];
            case 1:
                commentdata = _a.sent();
                console.log(commentdata);
                return [2 /*return*/];
        }
    });
}); });
app.post("/create_user", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var data, existinguser, saltRounds, hashedPassword, userdata;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                data = {
                    name: req.body.name,
                    password: req.body.password,
                };
                return [4 /*yield*/, collection.findOne({ name: data.name })];
            case 1:
                existinguser = _a.sent();
                if (!existinguser) return [3 /*break*/, 2];
                return [2 /*return*/, res.status(400).send("User already exists")];
            case 2:
                saltRounds = 10;
                return [4 /*yield*/, bcrypt.hash(data.password, saltRounds)];
            case 3:
                hashedPassword = _a.sent();
                data.password = hashedPassword;
                return [4 /*yield*/, collection.insertMany(data)];
            case 4:
                userdata = _a.sent();
                console.log(userdata);
                _a.label = 5;
            case 5: return [2 /*return*/];
        }
    });
}); });
app.post("/Index7", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var feedback_data, userfeedback_data, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                feedback_data = {
                    feedback_name: req.body.feedback_name,
                    email: req.body.email,
                    message: req.body.message,
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, feedback.create(feedback_data)];
            case 2:
                userfeedback_data = _a.sent();
                console.log(userfeedback_data);
                res.send("Feedback added successfully");
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error(error_1);
                res.status(500).send("Error adding feedback");
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.post("/index", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var check, ispasswordMatch, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                return [4 /*yield*/, collection.findOne({ name: req.body.name })];
            case 1:
                check = _b.sent();
                if (!check) {
                    return [2 /*return*/, res.status(400).send("User not found")];
                }
                return [4 /*yield*/, bcrypt.compare(req.body.password, check.password)];
            case 2:
                ispasswordMatch = _b.sent();
                if (ispasswordMatch) {
                    res.render("index1");
                }
                else {
                    req.status(400).send("Invalid password");
                }
                return [3 /*break*/, 4];
            case 3:
                _a = _b.sent();
                res.send("wrong details");
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
var port = 7000;
app.listen(port, function () {
    console.log("Server is running on port ".concat(port));
});
