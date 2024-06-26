import dotenv from "dotenv"
dotenv.config()

import connectDB from "./db/dbConnect.js"
import app from "./app.js"

connectDB().then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log("Server running on port 8000")
    })
}).catch((error) => {
    console.log("Error in connecting to the database")
})