const jwt = require("jsonwebtoken");

const jwt_secret = "this-is-confidential";

const sign = (user) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      {
        username: user.username,
        email: user.email,
      },
      jwt_secret,
      (err, token) => {
        if (err) return reject(err);
        resolve(token);
      }
    );
  });
};

const verify = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, jwt_secret, (err, decoded) => {
      if (err) reject(err);
      resolve(decoded);
    });
  });
};

module.exports = { sign, verify };
