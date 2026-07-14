import ApiError from "../utils/api-error.js"
import ApiResponse from "../utils/api-response.js"

export const healthController = async (req, res) => {
    try {
        return res.status(200).json(new ApiResponse(200, "Server is running properly"))
    } catch (error) {
        throw new ApiError(400, 'Error while running Server', error)
        if(process.env.NODE_ENV='developement'){
            console.log("Error while running server ", error)
        }
    }
}