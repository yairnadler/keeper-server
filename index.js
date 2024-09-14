import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
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

app.post("/newNote", (req, res) => {
    console.log(req.body);
    
  try {
    NotesModel.create(req.body);
    res.status(200).send(JSON.stringify(req.body));
  } catch (error) {
    res.status(400).send("Request Failed");
    console.error(error.message);
  }
});

app.get("/getNotes", async (req, res) => {
    try {
        const notes = await NotesModel.find().select("_id title content");
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})

app.delete("/notes/:id", async (req, res) => {
    const noteID = req.params.id;
    try {
        const deletedNote = await NotesModel.findByIdAndDelete(noteID); // Delete the user by ID
    
        if (deletedNote) {
          res.json({ message: 'User deleted successfully', user: deletedNote });
        } else {
          res.status(404).json({ message: 'User not found' });
        }
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
})

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
