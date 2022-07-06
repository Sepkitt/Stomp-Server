const express = require("express");
const app = express()


const http = require("http");
const StompServer = require("stomp-broker-js");

const port = 3002
const server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  
})




// var server = http.createServer();
// var stompServer = new StompServer({server: server});


// stompServer.subscribe("/echo", function(msg, headers) {
//     var topic = headers.destination;
//     console.log(topic, "->", msg);
//   });
  
//   stompServer.send('/test', {}, 'testMsg');

// const node_static = require("node-static");
// const static_directory = new node_static.Server(__dirname);

// const server = http.createServer((request, response) => {
//   console.log(request.url);
// //   static_directory.serve(request, response);
// });
const stompServer = new StompServer({
  server: server,
  // debug: function (str) {
  //         console.log(str);
  //       },
  path: "/ws",
//   protocol: "sockjs",
//   heartbeat: [2000, 2000]
});

//client side publishes to /echo and send a msg to
stompServer.subscribe("/echo", (msg, headers) => {
  

  // console.log('Server received msg')
  console.log(msg)
  console.log(headers)

  // console.log(`topic:${topic} messageType: ${typeof msg}`, msg, headers);
 stompServer.send("/", `Hello from server! ${msg}`);
});

// stompServer.connected = () => {
//   console.log("Connection from server")
//   stompServer.send("/echo", `Hello from server!`)
  
// }

stompServer.on('connection', (ws) => {
  console.log('A new client Connected')
  console.log(ws)
  
})

app.get('/', (req, res) => {
    res.send('Welcome to The backend')
})
app.get('/ws', (req, res) => {
  res.send('Welcome to The Socket')
})