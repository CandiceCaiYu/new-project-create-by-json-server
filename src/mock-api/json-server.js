const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname,'db.json'))
const middlewares = jsonServer.defaults()
const PORT = 4000

server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
   if(req.method === 'post') {
       req.body.createAt = Date.now()
   }
   next()
})
server.use(router)
server.listen(PORT, () => {
    console.log('JSON Server is running, port is'+PORT)
})
