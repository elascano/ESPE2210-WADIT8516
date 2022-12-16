import SoccerTeam from "../model/SoccerTeam.js";

export const getSoccerTeamId = async (req, res) => {
  try {
    const id = req.params.id;
    const soccerTeam = await SoccerTeam.find({ id });
    res.status(200).json(soccerTeam);
  } catch (error) {
    res.status(500).json({ message: error.toString() });
  }
};
