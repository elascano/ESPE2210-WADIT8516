import mongoose from "mongoose";

const Monitor = new mongoose.Schema(
  {
    id: Number,
    name: String,
    age: Number,
    moneySpent: Number,
  },
  {
    collection: "monitors",
    versionKey: false,
  }
);

export default mongoose.model("Monitor", Monitor);
