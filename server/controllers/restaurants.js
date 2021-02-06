const Location = require("../models/locations");
const Restaurant = require("../models/restaurants");

getRestaurants = async (req, res) => {
  const location = await Location.findOne(
    { name: req.query.locationName },
    { restaurantIds: 1, _id: 0 },
    { lean: true }
  )
    .then((location) => {
      return location;
    })
    .catch((err) => {
      throw err;
    });

  await Restaurant.find(
    { _id: { $in: location["restaurantIds"] } },
    (err, restaurants) => {
      if (err) throw err;
      else {
        res.status(200).json({
          success: true,
          data: restaurants,
        });
      }
    }
  );
};

module.exports = { getRestaurants };

/* location = {
  _id: 6004f9cff6ae9921f89f0f81,
  restaurantIds: [ 6004fb53f6ae9921f89f0f83, 600792321b229bae25a66497 ]
}
*/
// var location = db.locations.findOne({name: "Connaught Place"}, {restaurantIds: 1});
/*
{
  "_id" : ObjectId("6004f9cff6ae9921f89f0f81"),
  "restaurantIds" : [
    ObjectId("6004fb53f6ae9921f89f0f83"),
    ObjectId("600792321b229bae25a66497")
  ]
}
*/
//  var restaurants = db.restaurants.find({"_id": {$in: location["restaurantIds"]}})
/* Restaurant.find({ _id: { $in: location["restaurantIds"] } }
{ "_id" : ObjectId("6004fb53f6ae9921f89f0f83"), "name" : "Biryani By Kilo", "category" : [ "Biryani", "Mughlai", "Kebab", "Hyderabadi" ], "ratings" : 4 }
{ "_id" : ObjectId("600792321b229bae25a66497"), "name" : "Yeti - The Himalayan Kitchen", "category" : [ "Tibetan", "Nepalese", "Momos" ], "ratings" : 3 }
 */
