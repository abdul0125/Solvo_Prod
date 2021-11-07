import express from "express";
const router = express.Router();

import { signin, signup,getUser,editUser,search } from "../Controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/search",search)
router.get("/:id",getUser)
router.patch("/:id",editUser)

export default router;