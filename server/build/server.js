"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dbConnect_1 = __importDefault(require("./db/dbConnect"));
const app_1 = __importDefault(require("./app"));
(0, dbConnect_1.default)().then(() => {
    app_1.default.listen(process.env.PORT || 8000, () => {
        console.log("Server running on port 8000");
    });
}).catch((error) => {
    console.log("Error in connecting to the database");
});
