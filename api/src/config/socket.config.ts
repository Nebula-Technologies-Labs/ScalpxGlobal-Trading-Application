import { Server } from "socket.io";

let io;

export const Socket = (server) => {
  io = new Server(server, {
    cors: {
      origin: "*",
    },
    transports: ["websocket"],
  });
  if (io) console.log("Web Socket Start....");
};

export const ws = () => {
  if (!io) throw new Error("Error Start Web Socket ");
  return io;
};
