import { Router } from "express";
import * as smartwatchesController from "../controllers/smartwatchesController";

const router = Router();
router.post("/", smartwatchesController.postWatch);
router.get("/", smartwatchesController.getWatch);

export default router;