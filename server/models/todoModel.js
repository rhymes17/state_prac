import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
    todo : {
        type : String,
        required: true,
    },
    priority: {
        type : String,
        enum: ["High", "Medium", "Low"],
        default: "Low"
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

export const Todo = new mongoose.model("Todo", todoSchema)