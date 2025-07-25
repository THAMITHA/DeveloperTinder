const mongoose = require('mongoose')
const connectionRequestSchema = new mongoose.Schema(
   {
     fromUserId: {
         type: mongoose.Schema.Types.ObjectId,
         required: true
     },
     toUserId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
     },
     status:{
        type: String,
        required: true,
        enum: {
            values: ["ignored", "interested", "accepted", "rejected"],
            message: `{VALUE} is incorrect status type`,
        },
     },
  },
  { timestamps: true }
)

//connectionRequest.find({fromUserId:4564654575, toUserId: 54657y56})
connectionRequestSchema.index({fromUserId: 1, toUserId: 1})

connectionRequestSchema.pre("save", function(next){
    const connectionRequest = this;
    //Check if the fromUserId is same has toUserId
    if(connectionRequest.fromUserId.equals(connectionRequest.toUserId)){
        throw new Error("Cannot send connection request to yourself!")
    }
    next()
})

const connectionRequestModel = new mongoose.model("connectionRequest", connectionRequestSchema)

module.exports = connectionRequestModel