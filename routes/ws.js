const express = require("express")
const { connect } = require("http2")
const app = express()

// const wsRoutes = require('./routes/stomp')

const WebSocket = require('ws') 

const port = 5000
const server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  
})

// Set up a headless websocket server that prints any
// events that come in.
const wsServer  = new WebSocket.Server({server: server})


wsServer.on('connection', socket => {
    socket.on('message', message => console.log(message));
  });



wsServer.on('connection', function connection(ws) {
    console.log('A new client connected')
    ws.send('Welcome new Client')

    ws.on('message', function incoming(message) {
    console.log('recieved: %s', message)
    ws.send('Got your msg' + message)
})
})







// server.on('upgrade', (request, socket, head) => {
//     wsServer.handleUpgrade(request, socket, head, socket => {
//       wsServer.emit('connection', socket, request);
//     });
//   });
app.get('/', (req, res) => {
    res.send('Welcome to The backend')
})


// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
  
// })