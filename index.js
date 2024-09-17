import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/notes.routes.js";
import connect from "./models/utils.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
connect(MONGODB_PASSWORD);

app.use("/", router);

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
