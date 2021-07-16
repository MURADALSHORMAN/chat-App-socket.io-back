
// const express=require('express')
// const app =express()
// const server=require('http').Server(app)


// const PORT = process.env.PORT || 3231

// const SocketManager = require('./SocketManager')
// app.use(express.static(__dirname + '../../build'))
// io.on('connection', SocketManager)

// server.listen(PORT, ()=>{
// 	console.log("Connected to port:" + PORT);
// })

// var app = require('http').createServer()
// var io = module.exports.io = require('socket.io')(app)

// const PORT = process.env.PORT || 3231

// const SocketManager = require('./SocketManager')

// io.on('connection', SocketManager)

// app.listen(PORT, ()=>{
// 	console.log("Connected to port:" + PORT);
// })

const express = require('express');
const app = express();
const http = require('http');
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const server = http.createServer(app);
const io = module.exports.io = require('socket.io')(http);

const { v4: uuidv4 } = require('uuid');
io.listen(server);
// const io = module.exports.io = require('socket.io')(app)

app.use(cors());
// app.get('/hi', (req, res) => {
//   res.send('Hello World');
// });

server.listen(PORT, () => {
	console.log(`Listening on PORT ${PORT}`);
});