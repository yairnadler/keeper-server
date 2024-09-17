import { fetchNotesFromDB, newNoteInDB, deleteNoteFromDB } from "../models/utils.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await fetchNotesFromDB();
    res.status(200).send(JSON.stringify(notes));
  } catch (error) {
    res.status(400).send("no notes found");
    console.log(error.message);
  }
}

export async function createNewNote(req, res) {
    try {
        await newNoteInDB(req.body);
        res.status(200).send(JSON.stringify(req.body));
      } catch (error) {
        res.status(400).send("Request Failed");
        console.error(error.message);
      }
}

export async function deleteNote(req, res){
        const noteID = req.params.id;
    try {
        const deletedNote = await deleteNoteFromDB(noteID); // Delete the user by ID
        if (deletedNote) {
          res.json({ message: 'User deleted successfully', user: deletedNote });
        } else {
          res.status(404).json({ message: 'User not found' });
        }
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
}
