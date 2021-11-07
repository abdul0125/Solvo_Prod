import express from "express";
const router = express.Router();

import { Plans } from "../Controllers/plans.js";

router.post("/",Plans);

export default router;