const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Menu = new Schema({ name: String, price: Number, nonVeg: Boolean });

module.exports = mongoose.model("menus", Menu);
