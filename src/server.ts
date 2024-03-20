import mongoose from 'mongoose';
import app from './app';
import { Messages } from './constants';
import { Server } from 'socket.io';
import { createServer } from 'http';

let activeConnection = 0;

const httpServer = createServer(app);
const wsServer = new Server(httpServer, {
  cors: {
    origin: '*',
  },
});

wsServer.on('connection', (socket) => {
  socket.on('new-connection', () => {
    activeConnection += 1;
    socket.emit('new-connection', activeConnection);
    socket.broadcast.emit('new-connection', activeConnection);
  });

  socket.on('disconnect', () => {
    activeConnection -= 1;
    socket.broadcast.emit('user-disconnect', activeConnection);
  });
});

process.env.DB_HOST &&
  mongoose
    .connect(process.env.DB_HOST)
    .then(() => {
      httpServer.listen(process.env.PORT);
      console.log(Messages.dbConnectSuccess);
    })
    .catch((error) => {
      console.log(error.message);
      process.exit(1);
    });
