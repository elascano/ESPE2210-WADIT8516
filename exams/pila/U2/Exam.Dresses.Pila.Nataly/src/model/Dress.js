import mongoose from "mongoose";

const Dress = new mongoose.Schema(
  {
    id: Number,
    description: String,
    price: Number,
  },
  {
    collection: "dresses",
    versionKey: false,
  }
);

export default mongoose.model("Dress", Dress);
