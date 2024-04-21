import dotenv from "dotenv"
dotenv.config()

import connectDB from "./db/dbConnect"
import app from "./app"

const PORT = process.env.PORT || 8000

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port: ${PORT}`)
    })
}).catch((error) => {
    console.log("Error in connecting to the database")
})