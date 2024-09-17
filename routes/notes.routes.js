import { Router } from "express";
import { createNewNote, getAllNotes, deleteNote } from "../controllers/notes.controller.js";

const router = Router();

router.get("/notes", getAllNotes);

router.delete("/notes/:id", deleteNote);

router.post("/newNote", createNewNote);

export default router;
