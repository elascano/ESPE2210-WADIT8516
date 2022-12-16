import { Schema, model } from "mongoose";

const  smartwatch = new Schema(
  {
    name: { type: String, required: true},    
    price: { type: Number, required: true},
    brand: { type: String, required: true},
    color: { type: String, required: true},
    weight: { type: Number, required: true},
    battery: { type: String, required: true},

  },
  {
    versionKey: false,
  }
);

export default model("smartwatch", smartwatch);