const City = require("../models/cities");

getCities = async (req, res) => {
  await City.find({}, (err, cities) => {
    if (err) {
      throw error;
    } else {
      return res.status(200).json({
        success: true,
        data: cities,
      });
    }
  });
};

module.exports = { getCities };
