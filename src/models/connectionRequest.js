const mongoose = require('mongoose');

const connectionRequestSchema = new mongoose.Schema({
    fromUserId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    toUserId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: {
            values: ['ignored', 'interested', 'accepted', 'rejected'],
            message: '{VALUE} is not a valid status'
        },
        default: 'pending'
    },
},{
    timestamps: true
});

// Index to ensure unique connection requests between two users
connectionRequestSchema.index({ fromUserId: 1, toUserId: 1 });

connectionRequestSchema.pre('save', function(next) {
    const connectionRequest = this;
   if(connectionRequest.fromUserId.equals(connectionRequest.toUserId)) {
        return next(new Error("Cannot send a connection request to yourself"));
   }
    next();
});

const ConnectionRequestModel = mongoose.model('ConnectionRequest', connectionRequestSchema);

module.exports = ConnectionRequestModel;