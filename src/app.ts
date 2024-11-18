import express from "express";
import "dotenv/config";
import cors from "cors";
import userController from "./controllers/users";
import adminController from "./controllers/admin";
import candidatesController from "./controllers/candidates";
import votesController from "./controllers/votes";
import connectToMongo from "./config/db";
import http from "http";
import { Server } from "socket.io";
import { handelSocketConnection } from "./sockets/io";

const PORT = process.env.PORT || 3000;

const app = express();
const httpServer = http.createServer(app);
export const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: "*",
  },
  
});
io.on("connection",handelSocketConnection)
connectToMongo();

app.use(express.json());
app.use(cors());

app.use("/api/users", userController);
app.use("/api/admin", adminController);
app.use("/api/votes", votesController);
app.use("/api/candidates", candidatesController);

httpServer.listen(PORT, () => {
  console.log(`Server started ,Visit "http://localhost:${PORT}"`);
});

