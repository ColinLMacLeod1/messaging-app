const WebSocket = require('ws')

const server = new WebSocket.Server({port: 8989})

const users = []

const broadcast = (data, socket) => {
  server.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN && client !== socket) {
      client.send(JSON.stringify(data))
    }
  })
}

server.on('connection', socket => {
  let index
  socket.on('message', message => {
    const data = JSON.parse(message)
    switch (data.type) {
      case 'ADD_USER': {
        index = users.length
        users.push({name: data.name, id: index + 1})
        socket.send(JSON.stringify({
          type: 'USERS_LIST',
          users
        }))
        broadcast({
          type: 'USERS_LIST',
          users
        }, socket)
        break
      }
      case 'ADD_MESSAGE': {
        broadcast({
          type: 'ADD_MESSAGE',
          message: data.message,
          author: data.author
        }, socket)
        break
      }
    }
  })

  socket.on('close', () => {
    users.splice(index, 1)
    broadcast({
      type: 'USERS_LIST',
      users
    }, socket)
  })
})
