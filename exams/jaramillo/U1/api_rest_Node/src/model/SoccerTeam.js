import mongoose from "mongoose";

const SoccerTeam = new mongoose.Schema(
  {
    id: Number,
    name: String,
    soccerManager: String,
    gamesPlayed: Number,
  },
  {
    collection: "SoccerTeams",
    versionKey: false,
  }
);

export default mongoose.model("SoccerTeam", SoccerTeam);
