const { skipMiddlewareFunction } = require('mongoose');
const validator = require('validator');
const validateSignUpData = (req) => {
   const { firstName, lastName, emailId, password } = req.body;
   if(!firstName  || !lastName) {
     throw new Error("First name and last name are required");
   }
   else if(!emailId || !validator.isEmail(emailId)) {
     throw new Error("Valid email is required");
   }
   else if(!password || !validator.isStrongPassword(password)) {
     throw new Error("Password must be at least 6 characters long and contain a mix of letters, numbers, and symbols");
   }
}

const validateEditProfileData = (req) => {
   const allowedEditFields = ["firstName", "lastName", "photoUrl", "gender", "age", "about", "skills"];
   const isEditAllowed = Object.keys(req.body).every((key) => {
       if (!allowedEditFields.includes(key)) {
           throw new Error(`Invalid field: ${key}`);
       }
       return true;
   });
   if (!isEditAllowed) {
       throw new Error("Invalid profile update data");
   }
   return isEditAllowed
}

module.exports = {
  validateSignUpData,
  validateEditProfileData
}