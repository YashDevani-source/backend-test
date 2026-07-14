import app from "./app.js"
import connectDb from "./db/index.js"
import dotenv from 'dotenv'
import ApiError from "./utils/api-error.js"

dotenv.config({
    path:'./.env'
})

const PORT = process.env.PORT || 3000

connectDb()
    .then(() => {
        try {
            app.listen(PORT, () => {
                console.log("Server is running on PORT: ", PORT)
            })
        } catch (error) {
            throw new ApiError(400, "Error while running server")
            if(process.env.NODE_ENV==='developement'){
            console.log("Error while Running Server")
        }
        }
    })
