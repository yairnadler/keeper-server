import mongoose from "mongoose";

const NotesSchema = new mongoose.Schema({
  title: String,
  content: String,
});

export const NotesModel = mongoose.model("notes", NotesSchema);

