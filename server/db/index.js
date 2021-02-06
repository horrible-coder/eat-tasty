const mongoose = require("mongoose");

const db = async () => {
  await mongoose
    .connect(
      "mongodb+srv://user1234:user1234@cluster0.1uoe2.mongodb.net/food?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("Connection successful"))
    .catch((err) => console.error("Connection error: ", err.message));
};

module.exports = db;
