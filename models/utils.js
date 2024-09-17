import { NotesModel } from "./Notes.js";
import mongoose from "mongoose";


export default function connect(mongoPassword){
  mongoose.connect(
    `mongodb+srv://yairnadler7:${mongoPassword}@cluster0.s7myk.mongodb.net/keeper-app`
  );
}

export async function fetchNotesFromDB() {
  const notes = await NotesModel.find().select("_id title content"); 
  return notes;
}

export async function newNoteInDB(note){
  await NotesModel.create(note);
}

export async function deleteNoteFromDB(noteID){
  return await NotesModel.findByIdAndDelete(noteID);
}
