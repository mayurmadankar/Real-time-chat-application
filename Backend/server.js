import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { connectDB } from "./src/config/db.js";
import bodyParser from "body-parser";
import http from "http";
import cors from "cors";

const app = express();
const server = http.createServer(app);
const port = process.env.PORT_NUMBER;

app.use(express.json({ limit: "4mb" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the Real Time chat Application");
});

app.listen(port, () => {
  console.log(`Server is running on PORT :- ${port}`);
  connectDB();
});
