const express = require("express");
const routes = express.Router();

// const stomp = require('@stomp/stompjs');



routes.get('/', (req, res) => {
    res.send('Websocket')
})

module.exports = routes
