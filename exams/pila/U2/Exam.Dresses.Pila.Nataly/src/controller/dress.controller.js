import Dress from "../model/Dress.js";

export async function getDresses(req, res) {
  try {
    const dresses = await Dress.find();
    res.json(dresses);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error" });
  }
}
