import { Router } from "express";

import {
  getSoccerTeams,
  getSoccerTeamId,
} from "../controller/soccerTeam.controller.js";

const router = Router();

router.get("/:id", getSoccerTeamId);

export default router;
