const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
   firstName: {
        type: String,
        required: true
   },
    lastName: {
          type: String,
          required: true
    },
    emailId: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    age: {
        type: Number,
        min: 0,
        max: 120
    },
    gender : {
        type: String,
        enum: ['male', 'female', 'other']
    }
});
//User is a model for the user collection in the database
const User  = mongoose.model('User', userSchema);
module.exports = User;