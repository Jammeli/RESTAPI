const mongoose = require('mongoose')
const UserModel = new mongoose.Schema ( {
    name: {
        type:String,
        required : true
    },
    tel: {
        type:Number,
        required: true
    },
})
module.exports = mongoose.model('User', UserModel) 