import Watch from "../models/smartwatch";

export const postWatch = async (req, res) => {
  try {
    const newWatch = new Watch({
        name: req.body.name,
        price: req.body.price,
        brand: req.body.brand,
        color: req.body.color,
        weight: req.body.weight,
        battery: req.body.battery,
    });
    const watchSaved = await newWatch.save();
    res.json(watchSaved);
  } catch (err) {
    res.status(500).json({ error: `Watch don't create` });
  }
};

export const getWatch = async (req, res) => {
  try {
    const watch = await Watch.find();
    res.json(watch);
  } catch (err) {
    res.status(500).json({ error: `Watch don't found` });
  }
};
