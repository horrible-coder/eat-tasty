const User = require("../models/users");
const { hashPassword, comparePassword } = require("../utils/password");
//const { sign } = require("../utils/jwt");

createUser = async (req, res) => {
  const body = req.body;
  if (!body.email) throw new Error("Provide an email.");
  if (!body.username) throw new Error("Provide a username.");

  if (!body.password) throw new Error("Provide a password.");

  const existing = await User.findOne({ email: body.email });
  if (existing) throw new Error("User with this email already exists.");

  const user = new User({
    email: body.email,
    username: body.username,
    password: await hashPassword(body.password),
  });

  /* -----------------
  const token = await sign(user);
  console.log(token);
  res.cookie("jwt", token, { httpOnly: true, maxAge: 10 * 24 * 60 * 60 }); 
  ----------------- */

  await user
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: user._id,
        username: user.username,
        email: user.email,
        message: "User created successfully.",
        //token: token,
      });
    })
    .catch((error) => {
      throw error;
    });
};

loginUser = async (req, res) => {
  const body = req.body;

  if (!body.email) throw new Error("Provide an email.");
  if (!body.password) throw new Error("Provide a password.");

  const existing = await User.findOne({ email: body.email });
  if (!existing) throw new Error("Account doesn't exist.");

  const matched = await comparePassword(body.password, existing.password);

  /* -----------------
  const token = await sign(existing);
  console.log(token);
  res.cookie("jwt", token, { httpOnly: true, maxAge: 10 * 24 * 60 * 60 });
   ----------------- */

  if (!matched) throw new Error("Wrong password.");
  else {
    return res.status(200).json({
      success: true,
      username: existing.username,
      message: "Login successful.",
      //token: token,
    });
  }
};

module.exports = { createUser, loginUser };
