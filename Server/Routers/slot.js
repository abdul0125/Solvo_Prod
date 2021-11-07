import express from "express";
const router = express.Router();

import { Slot ,getTimeTable ,book_slot} from "../Controllers/slots.js";

router.post("/",Slot);
router.post("/gettable",getTimeTable);
router.patch("/book",book_slot);
export default router;