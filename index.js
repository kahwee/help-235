var server = require('./server5')
var router = require('./route')
var requestHandlers = require('./requestHandlers')
var handle = {}
function handleRequest (request, response) {
  response.end('It Works!! Path Hit: ' + request.url)
}
handle['/'] = requestHandlers.start
handle['/start'] = requestHandlers.start
handle['/upload'] = requestHandlers.upload
server.start(router.route, handle)
