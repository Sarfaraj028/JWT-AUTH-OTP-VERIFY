import mongoose from "mongoose";
import bcrypt from "bcrypt"

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: {
        type:String,
        minlength: [6, "must be atleast 6 characters"],
        maxlength: [32, "Shoud not be more than 32 charcters"]
    },
    phone: String,
    accountVerified: {
        type: Boolean,
        default: false,
    },
    verificationCode: Number,
    verificationCodeExpire: Date,
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    createdAt: {
        type: Date,
        default: Date.now
    }

})

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) {
        next()
    }
    this.password = await bcrypt.hash(this.password, 10);
})

userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

export const User = mongoose.model("User", userSchema)