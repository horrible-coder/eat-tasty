const { verify } = require("../utils/jwt");

const requireAuth = async (req, res, next) => {
  if (!req.header("Authorization"))
    return res.status(401).json({
      errors: { body: ["Authorization failed. No authorization header."] },
    });
  const authHeader = req.header("Authorization").split(" ");

  if (authHeader[0] != "Bearer")
    return res.status(401).json({
      errors: { body: ["Authorization failed. Bearer is missing."] },
    });

  const token = authHeader[1];
  console.log(token);
  try {
    const user = await verify(token);
    console.log(user);
    if (!user) throw new Error("No user found in token.");
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      errors: { body: ["Authorization failed. ", error.message] },
    });
  }
};

module.exports = requireAuth;
