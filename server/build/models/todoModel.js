"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const todoSchema = new mongoose_1.default.Schema({
    todo: {
        type: String,
        required: true,
    },
    priority: {
        type: String,
        enum: ["High", "Medium", "Low"],
        default: "Low"
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});
exports.Todo = mongoose_1.default.model("Todo", todoSchema);
