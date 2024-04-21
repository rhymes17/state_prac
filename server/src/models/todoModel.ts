import mongoose, {Document, Model} from "mongoose"

interface ITodo extends Document{
    todo: string;
    priority: string;
    completed: boolean;
}

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

export const Todo : Model<ITodo> = mongoose.model<ITodo>("Todo", todoSchema)