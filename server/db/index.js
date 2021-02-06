const mongoose = require("mongoose");

const db = async () => {
  await mongoose
    .connect(process.env.CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connection successful"))
    .catch((err) => console.error("Connection error: ", err.message));
};

module.exports = db;
