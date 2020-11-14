const jwt = require("jsonwebtoken");
const config = require("../config.json");

module.exports = function(req, res, next) {
  //get the token from the header if present
  const token = req.header("token");
  // console.log(req.headers);
  //if no token found, return response (without going to the next middelware)
  if (!token) return res.status(401).send("Access denied. No token provided.");

  try {
    //if can verify the token, set req.user and pass to next middleware
    const decoded = jwt.verify(token, config.secure);
    req.user = decoded;
    next();
  } catch (ex) {
    //if invalid token
    return res.status(400).send("Invalid token.");
  }
};