const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    tags:{
        type:String,
        required:true,
       
    },
    file_data:{
        type:String,
        required: true   
    },
    image_url:{
        type:String,
        required: true   
    }
});

module.exports = mongoose.model('User', userSchema);