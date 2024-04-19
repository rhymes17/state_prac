import cookieParser from "cookie-parser"
import express from "express"
import cors from "cors"

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cookieParser())

//import Routes
import todoRoutes from "./routes/todoRoutes"

app.use("/api/todo", todoRoutes)


export default app