import mongoose from 'mongoose'
import ApiError from '../utils/api-error.js'

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        if(process.env.NODE_ENV==='developement'){
            console.log("MonogoDB Connected Successfully")
        }
    } catch (error) {
        throw new ApiError(400, "Error while connecting to DB", error)
        if(process.env.NODE_ENV==='developement'){
            console.log("Error While connecting to DB")
        }
    }
}

export default connectDb