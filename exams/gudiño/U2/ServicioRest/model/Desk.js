const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeskSchema = new Schema(
    {
        id: { type: Number },
        description: { type: String },
        material: { type: String},
    },
    {
        collection: "desks",
        timestamps: false,
        versionKey: false,
      }
)
module.exports = Test2 = mongoose.model('Desk',DeskSchema);