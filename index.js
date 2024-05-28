import http from "http";
import path from "path";
import express from "express";
import { Server as SocketIo } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new SocketIo(server);

app.use(express.static(path.resolve("./public")));

io.on("connection", (socket) => {
  console.log("Socket Connected", socket.id);
  socket.on("binary stream", (stream) => {
    console.log("binary stream incoming...");
  });
});

server.listen(3000, () => console.log(`Server running on port 3000`));
