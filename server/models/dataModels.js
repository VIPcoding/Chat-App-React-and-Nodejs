const mongoose = require("mongoose")

const userShcema = new mongoose.Schema ({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:String
})

const Users = mongoose.model("test", userShcema);

module.exports = Users;