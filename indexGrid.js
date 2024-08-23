const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

async function main() {

  const app = express();
  const server = createServer(app);
  const io = new Server(server, {
    connectionStateRecovery: {}
  });

  app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'indexGrid.html'));
  });

  io.on('connection', async (socket) => {
    socket.on('chat message', async (msg) => {
      
      try {
        
      } catch (e) {
        // TODO handle the failure
        return;
      }
      io.emit('chat message', msg,);
    });
  
    if (!socket.recovered) {
      // if the connection state recovery was not successful
      try {
        
      } catch (e) {
        // something went wrong
      }
    }
  });

  server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
  });
}

main();