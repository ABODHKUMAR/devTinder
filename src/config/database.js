const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://abodh5921:7pzB7HnfYGt96Wuq@ecommerce-website-clust.ogjkv1b.mongodb.net/devTinder'
        );
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
