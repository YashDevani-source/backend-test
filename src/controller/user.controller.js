
import User from '../models/user.models.js'
import ApiError from '../utils/api-error.js'
import ApiResponse from '../utils/api-response.js'

export const createUserController = async (req, res) => {
    try {
        const {username, email, password} = req.body

    if(!username || !email || !password) {
        throw new ApiError(400, "All filelds are Required")
    }

    const existingUser = await User.findOne({
        $or: [{username}, {email}]
    })
    if(existingUser){
        throw new ApiError(400, "User Already exist")
    }
    const user = await User.create({
        username, email, password
    })
    user.save({validateBeforeSave: false})

    return res.status(200).json(new ApiResponse(200, "User Created Succesfully", user))
    } catch (error) {
        throw new ApiError(400, "Error while creating User")
        if(process.env.NODE_ENV = 'developement') {
            console.log('Error While Creating User: ', error)
        }
    }
}

export const getAllUserController = async (req, res) => {
    try {
        const users = await User.find().select('-password')

    if(!user){
        throw new ApiError(400, "Error while Getting All users")
    }

    return res.status(200).json(new ApiResponse(200, "All Users get successfully", users))
    } catch (error) {
        throw new ApiError(400, 'error while getting all users ', error)
        if(process.env.NODE_ENV = 'developement') {
            console.log('error while getting all users: ', error)
        }
    }
}

export const getUserByIdController = async (req, res) => {
    try {
        const {id} = req.params

    if(!id) {
        throw new ApiError(400, "Id is required")
    }

    const user = await User.findById(id)

    if(!user) {
        throw new ApiError(400, "Id is incorrect")
    }

    return res.status(200).json(new ApiResponse(200, "User get successfully", user))
    } catch (error) {
        throw new ApiError(400, "Error while getting User")

        if(process.env.NODE_ENV = 'developement'){
            console.log('Error while getting User ', error)
        }
    }
}

export const updateUserController = async (req, res) => {
    try {
        const {id} = req.params
        const {username,email, password} = req.body

        if(!id) {
        throw new ApiError(400, "Id is required")
        }

        const newUser = await User.findByIdAndUpdate(id,{
            username,
            password,
            email
        }).select('-password')

        if(!newUser) {
            throw new ApiError(400, "Id is correct")
        }

        return res.status(200).json(new ApiResponse(200, "User Updated success fully", newUser))

    } catch (error) {
        
    }
}

export const deleteUserByIdController = async (req, res) => {
    try {
        const {id} = req.params

        if(!id) {
        throw new ApiError(400, "Id is required")
        }

        const newUser = await User.findByIdAndDelete(id)

        if(!newUser) {
            throw new ApiError(400, "Id is correct")
        }

        return res.status(200).json(new ApiResponse(200, "User deleted Successfully"))
    } catch (error) {
        throw new ApiError(400, "Error while deleting user")
        if(process.env.NODE_ENV='developement'){
            console.log("Error while deleting user")
        }
    }
}
