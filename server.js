const {client} = require("websocket");
const {WebSocketServer} = require("ws");

const server = new WebSocketServer({ port: 3000 })

server.on('connection', ws => {
    ws.on('message', message => {
        server.clients.forEach(client => {
                client.send(message.toString())
        })
    })
    ws.send('добро пожаловать на caskey99')
})
