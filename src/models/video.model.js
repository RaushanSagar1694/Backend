import mongoose from "mongoose";
import mongooseAgregatePaginate from 'mongoose-aggregate-paginate-v2';

const userVideoSchema = new mongoose.Schema(
    {
        videoFile:{
            type: String, // cloudnairy
            required: true,

        },
        thumbnail:{
            type: String, // cloudnairy
            required: true,
        },
        title:{
            type: String, 
            required: true,
        },
        description:{
            type: String, 
            required: true,
        },
        duration:{
            type: Number,  // cloudnairy
            required: true,
        },
        views: {
            type: Number,
            default: 0,
        },
        isPublished:{
            type: Boolean,
            default: true,
        },
        owner: {
            type : mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    },
     {timestamps: true}
);


export const userVideo = mongoose.model("userVideo", userVideoSchema);