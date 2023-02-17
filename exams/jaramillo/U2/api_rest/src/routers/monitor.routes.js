import { Router } from "express";
import { getMonitors } from "../controller/monitor.controller.js";

const router = Router();

router.get("/", getMonitors);

export default router;
