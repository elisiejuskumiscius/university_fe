const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('universities.json')
const middlewares = jsonServer.defaults()
 
server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
	if (req.path === '/login') {
		if (req.body.username === 'SDA' && req.body.password === 'slaptazodis') {
			res.jsonp({"token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJydXRlbmlzLnR1cmNpbmFzQGdtYWlsLmNvbSIsImV4cCI6MTU4Nzc2MjA1NCwiaWF0IjoxNTg3NzU4NDU0fQ.bMWLflIrABWEapwqAugBa9tYukP662VhWzIhv_1EXjU9jS8Svi1_CAcmm9C-HDPRDcPlpqC4P6bofcoEzbehdw"})
		} else {
			res.sendStatus(401)
		}
	} else {
		next()
	}
})
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
