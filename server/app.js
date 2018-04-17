const WebSocket = require('ws')

const server = new WebSocket.Server({port: 8989})

const users = []

const broadcast = (data, socket) => {
  server.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN && cient !== socket) {
      client.send(JSON.stringify(data))
    }
  })
}

server.on('connection', socket => {
  let index
})
