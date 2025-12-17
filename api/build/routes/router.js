"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
// You can require and use your routes here ;)
router.get("/", function (req, res) {
    res.status(200).json({ message: "Personal Server is running" });
});
exports.default = router;
