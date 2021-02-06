const express = require("express");
const router = express.Router();
const { createUser, loginUser } = require("../controllers/users");
const { getCities } = require("../controllers/cities");
const { getLocations } = require("../controllers/locations");
const { getRestaurants } = require("../controllers/restaurants");
const { getMenu } = require("../controllers/menu");
const requireAuth = require("../middlewares/requireAuth");

router.get("/cities", async (req, res) => {
  try {
    await getCities(req, res);
  } catch (error) {
    return res.status(400).json({
      errors: { body: "Could not fetch cities. " + error.message },
    });
  }
});

router.get("/locations", async (req, res) => {
  try {
    await getLocations(req, res);
  } catch (error) {
    return res.status(400).json({
      errors: { body: "Could not fetch locations. " + error.message },
    });
  }
});

router.get("/restaurants", async (req, res) => {
  try {
    await getRestaurants(req, res);
  } catch (error) {
    return res.status(400).json({
      errors: { body: "Could not fetch restaurants. " + error.message },
    });
  }
});

router.get("/menu", async (req, res) => {
  try {
    await getMenu(req, res);
  } catch (error) {
    return res.status(400).json({
      errors: { body: "Could not fetch menu. " + error.message },
    });
  }
});

/* router.get("/user", requireAuth, async (req, res) => {
  try {
    const user = req.user;
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(400).json({
      errors: { body: "Could not fetch user. " + error.message },
    });
  }
});
 */
router.post("/users", async (req, res) => {
  try {
    await createUser(req, res);
  } catch (err) {
    return res.status(422).json({
      errors: { body: "Could not create user. " + err.message },
    });
  }
});

router.post("/users/login", async (req, res) => {
  try {
    await loginUser(req, res);
  } catch (error) {
    return res.status(422).json({
      errors: { body: "Login failed. " + error.message },
    });
  }
});

module.exports = router;
