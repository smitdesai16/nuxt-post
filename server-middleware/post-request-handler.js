const querystring = require('querystring')

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function(req, res, next) {
	let body = ''

	req.on('data', (data) => {
		body += data
	})

	req.on('end', () => {
		req.body = querystring.parse(body) || {}
		next()
	})
}
