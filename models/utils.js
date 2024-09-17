import { NotesModel } from "./Notes.js";

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
