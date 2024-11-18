import express from "express";
import dotenv from "dotenv";
import router from "./route/userroute.js";
import { dbconnection } from "./dbconnect.js";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
dotenv.config();
const PORT = 5000;
app.use(cors());
app.use(bodyParser.json());
app.use("/api/users", router);

dbconnection()
  .then(() => {
    console.log("data base connection successful");
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  })
  .catch(() => console.log("Connection error"));
