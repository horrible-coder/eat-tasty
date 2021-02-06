const Restaurant = require("../models/restaurants");
const Menu = require("../models/menu");

getMenu = async (req, res) => {
  const restaurant = await Restaurant.findOne(
    { name: req.query.restaurantName },
    { menuIds: 1, _id: 0 },
    { lean: true }
  )
    .then((restaurant) => {
      return restaurant;
    })
    .catch((err) => {
      throw err;
    });
  console.log(restaurant);

  await Menu.find({ _id: { $in: restaurant["menuIds"] } }, (err, menu) => {
    if (err) throw err;
    else {
      console.log(menu);
      res.status(200).json({
        success: true,
        data: menu,
      });
    }
  });
};

module.exports = { getMenu };
