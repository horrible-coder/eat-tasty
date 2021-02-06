const City = require("../models/cities");
const Location = require("../models/locations");

getLocations = async (req, res) => {
  const city = await City.findOne(
    { name: req.query.cityName },
    { locationIds: 1, _id: 0 },
    { lean: true }
  )
    .then((city) => {
      return city;
    })
    .catch((err) => {
      throw err;
    });

  await Location.find(
    { _id: { $in: city["locationIds"] } },
    (err, locations) => {
      if (err) throw err;
      else {
        res.status(200).json({
          success: true,
          data: locations,
        });
      }
    }
  );
};

module.exports = { getLocations };
