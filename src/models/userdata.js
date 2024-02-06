const mongoose = require('mongoose');
// const validater = require('validater');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLenght:3
    },
    email:{
        type:String,
        required:true,
        minLenght:3
        // validate(value){
        //     if (!validator.isEmail(value)) {
        //         throw new Error('Invalid email id')
        //     }
        // }
    },
    phone:{
        type:Number,
        required:true,
        min:10,
        maxLength:10
    },
    message:{
        type:String,
        required:true,
        minLenght:5
    },
    date:{
        type:Date,
        default:Date.now
    }
})

// we need to create a collection 

const User = mongoose.model("User",userSchema);


module.exports = User;