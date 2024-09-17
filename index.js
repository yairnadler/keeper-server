import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/notes.routes.js";
import { NotesModel } from "./models/Notes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

mongoose.connect(
  `mongodb+srv://yairnadler7:${MONGODB_PASSWORD}@cluster0.s7myk.mongodb.net/keeper-app`
);

app.use("/", router);

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
