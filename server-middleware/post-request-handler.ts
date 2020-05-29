import querystring from 'querystring'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function(req: any, res: any, next: any) {
	let body = ''

	req.on('data', (data: any) => {
		body += data
	})

	req.on('end', () => {
		req.body = querystring.parse(body) || {}
		next()
	})
}
