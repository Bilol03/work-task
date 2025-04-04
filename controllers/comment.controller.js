import { errorHandler } from '../utils/error.handler.js'
import { responce } from '../utils/response.handler.js'
import Comments from '../models/comment.model.js'
import { mongoose } from 'mongoose'
let POST = errorHandler(async (req, res) => {
	let body = req.body
	if (!body.rating) throw new Error('Rating not entered')
	if (body.rating < 1 || body.rating > 5)
		throw new Error('Wrong rating is written')
	if (!body.comment) throw new Error('Comment not entered')

	body.userId = req.id
	body.courseId = req.params.courseId
	let data = await Comments.create(body)

	responce(res, 201, { message: 'Successfully posted!', data })
})

let GET_BY_ID = errorHandler(async (req, res) => {
	let courseId = req.params.courseId
	
	let data = await Comments.find({ courseId: new mongoose.Types.ObjectId(courseId) });

	if (!data.length) throw new Error('No comments for this post')
	responce(res, 200, { message: 'Successfully found!', data })
})

let UPDATE = errorHandler(async (req, res) => {
    let commentId = req.params.id
    let body = req.body
    if(!body.comment && !body.rating) throw new Error("Editing info not entered!")

	let data = await Comments.findOne({ _id: commentId });
    console.log(data);
    
    if (!data) throw new Error("Comment not found")
    
    if(data.userId != req.id) throw new Error("You are not allowed to edit this comment!")
    
    let updated = await Comments.findByIdAndUpdate(commentId, body).exec()

	responce(res, 201, { message: 'Successfully updated!', updated })

})





export default {
	POST,
	GET_BY_ID,
    UPDATE,
}
