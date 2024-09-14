import mongoose from "mongoose";

const NotesSchema = new mongoose.Schema({
  _id: Number,
  title: String,
  content: String,
});

export const NotesModel = mongoose.model("notes", NotesSchema);
