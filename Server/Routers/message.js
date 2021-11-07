import express from "express";
import { getmessage, postmessage,add_Contact } from "../Controllers/message.js";
const router = express.Router();

router.get('/:id',getmessage);
router.post('/',add_Contact)
router.post('/:id',postmessage);


export default router;