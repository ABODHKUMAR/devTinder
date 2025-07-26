const mongoose = require('mongoose');
const validator = require('validator');
const userSchema = new mongoose.Schema({
   firstName: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 40
   },
    lastName: {
          type: String,
          required: true,
          minlength: 4,
          maxlength: 40
    },
    emailId: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        validate(value) {
           
            if (!validator.isEmail(value)) {
                throw new Error("Invalid email format");
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        validate(value) {
            if (!validator.isStrongPassword(value)) {
                throw new Error("Weak password");
            }
        }
    },
    age: {
        type: Number,
        min: 18,
        max: 120
    },
    gender : {
        type: String,
        validate: function(value) {
            if(['male', 'female', 'other'].includes(value)) {
                return true;
            }
            throw new Error(`${value} is not a valid gender!`);
        }
    },
    photoUrl: {
        type: String,
        default: 'https://shorturl.at/CjByg',
        validate(value) {
            if (!validator.isURL(value)) {
                throw new Error("Invalid URL format");
            }
        }
    },
    about: {
        type: String,
        default: 'This is a default about of the user!'
    },
    skills:{
        type: [String],
        default: []
    }
},{
    timestamps: true,
});
//User is a model for the user collection in the database
const User  = mongoose.model('User', userSchema);
module.exports = User;