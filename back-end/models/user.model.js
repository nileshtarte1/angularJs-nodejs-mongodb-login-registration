const mongoose = require('mongoose');

var user = mongoose.model('users',{
    fullName:{ type:String},
    mobileNumber:{type:Number},
    email:{type:String},
    password:{type:String}

});

module.exports = {user};