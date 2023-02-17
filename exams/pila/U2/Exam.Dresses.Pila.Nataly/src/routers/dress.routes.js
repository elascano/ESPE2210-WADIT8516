import { Router } from "express";
import { getDresses } from "../controller/dress.controller.js";

const router = Router();

router.get("/", getDresses);

export default router;
