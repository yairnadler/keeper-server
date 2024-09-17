import { NotesModel } from "./Notes.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;

export default function connect(){
  mongoose.connect(
    `mongodb+srv://yairnadler7:${MONGODB_PASSWORD}@cluster0.s7myk.mongodb.net/keeper-app`
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
