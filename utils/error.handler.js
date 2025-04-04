import { responce } from "./response.handler.js"

let errorHandler = (func) => {
	return (req, res, next) => {
		func(req, res, next).catch((err) => {
			console.log(err, 'errorcha')
			responce(res, 404, 'Error: ' + err.message)
		})
	}
}

let authErrorHandler = (func) => {
	return (req, res, next) => {
		func(req, res, next).catch((err) => {
			console.log(err)
			responce(res, 401, 'Error: ' + err.message)
		})
	}
}

export { errorHandler, authErrorHandler }
