const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Cities = new Schema({}, { strict: false });

module.exports = mongoose.model("cities", Cities);
