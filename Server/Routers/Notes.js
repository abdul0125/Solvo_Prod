import express from 'express';
import {getNotes, uploadNotes,updateNotes,deleteNotes} from '../Controllers/Notes.js';
import auth from '../middleware/auth.js';

const notesRoutes = express.Router();

notesRoutes.get('/fetch',auth,getNotes);
notesRoutes.post('/add',auth,uploadNotes);
notesRoutes.patch('/update/:id',auth,updateNotes);
notesRoutes.delete('/delete/:id',auth,deleteNotes);

export default notesRoutes;