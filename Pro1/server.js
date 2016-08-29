var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(80);
console.log('sup');

function handler (req, res) {

  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.sockets.on('connection', function (socket) {
	console.log('whazaa');
socket.on('feels', function(d) {
	io.sockets.emit('feeling', {feel: d.feel})
})

  socket.emit('news', { hello: 'world' });
 });