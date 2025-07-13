import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { connectDB } from "./src/config/db.js";
import bodyParser from "body-parser";

const server = express();
const port = process.env.PORT_NUMBER;

server.use(express.json());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.get("/", (req, res) => {
  res.send("Welcome to the Real Time chat Application");
});

server.listen(port, () => {
  console.log(`Server is running on PORT :- ${port}`);
  connectDB();
});
