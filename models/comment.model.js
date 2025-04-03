import { mongoose } from "mongoose";

let commentSchema = new mongoose.Schema({
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },

    rating: {
        type: Number,
        min: 1,
        max: 5
    },

    comment: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: new Date.now()
    },
})