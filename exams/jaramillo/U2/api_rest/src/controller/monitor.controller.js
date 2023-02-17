import Monitors from "../model/Monitor.js";

export async function getMonitors(req, res) {
  try {
    const monitors = await Monitors.find();
    res.json(monitors);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error" });
  }
}
