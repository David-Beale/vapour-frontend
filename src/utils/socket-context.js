import io from 'socket.io-client';
import React from 'react';
const SERVER = 'https://vapour-backend.herokuapp.com/'

export const socket = io(SERVER);

export const SocketContext = React.createContext(
  socket
);