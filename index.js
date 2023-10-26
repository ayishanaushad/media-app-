//1. import json server
const jsonserver= require('json-server')

//2. create a server for media app
const mediaAppServer = jsonserver.create()

//3. set up path for json file
const router =jsonserver.router('db.json')

//4. Return middleware used by jsonserver
const middleware = jsonserver.defaults()

//5. set port number
const port = process.env.port || 4000

//6.use middleware in app
mediaAppServer.use(middleware)
mediaAppServer.use(router)

//7. To listen for resolving request from client
mediaAppServer.listen(port,()=>{
    console.log('listening on port'+port);
})