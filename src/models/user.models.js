import mongoose, {Schema} from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

userSchema.pre('save', async function() {
    if(!this.isModified('password')) retuen
    this.password = await bcrypt.hash(this.password, 10)
})
userSchema.method.isPasswordCorrect = async function(password) {

    return await bcrypt.compare(this.password, password)
}

const User = mongoose.model('User', userSchema)

export default User