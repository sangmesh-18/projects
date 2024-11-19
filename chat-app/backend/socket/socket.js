import { Server } from "socket.io";
import http from "http";
import express from "express";
import { Socket } from "dgram";

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

export const getReceiverSocketId =(receiverId)=>{
    return UserSocketMap[receiverId];
  
}

// UserSocketMap: {userId:socketId}
const UserSocketMap = {}; //{userId:socketId}

io.on("connection", (socket) => {
  console.log("User connected", socket.id);

  const userId = socket.handshake.query.userId;

  if (userId != "undefined") UserSocketMap[userId] = socket.id;

  io.emit("getOnlineUsers", Object.keys(UserSocketMap));

  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
    delete UserSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(UserSocketMap));
  });
});

export { app, io, server };
