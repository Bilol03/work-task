import { mongoose } from 'mongoose'

let commentSchema = new mongoose.Schema({
	courseId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Course',
	},

	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Users',
	},

	rating: {
		type: Number,
		min: 1,
		max: 5,
	},

	comment: {
		type: String,
		required: true,
	},

	createdAt: {
		type: Date,
		default: Date.now(),
	},
})

let comments = mongoose.model('comments', commentSchema)

export default comments
