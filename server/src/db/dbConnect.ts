import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const res = await mongoose.connect(`${process.env.MONGO_URI}`)
        console.log(`Database succesfully connected : ${res.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}

export default connectDB