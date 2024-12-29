const User = require("../models/User");
const jwt = require("jsonwebtoken");
const maxAge = 5 * 24 * 60 * 60; //In Seconds
const createJWT = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: maxAge });
};
const alertError = (err) => {
  console.log(err);
  let errors = { name: "", email: "", password: "" };
  if (err.message === "Incorrect Email") {
    errors.email = "This Email not found";
  }
  if (err.message === "Incorrect Password") {
    errors.password = "The Password is incorrect";
  }
  if (err.code === 11000) {
    errors.email = "This email already existed";
  }
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

module.exports.signup = async (req, res) => {
  // #swagger.tags = ['Auth']
  const { name, email, password } = req.body;
  try {
    const user = await User.create({ name, email, password });
    const token = createJWT(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 }); //In mili seconds
    res.status(201).json({ user });
  } catch (err) {
    console.log(err);
    let errors = alertError(err);
    res.status(400).json({ errors });
  }
};
module.exports.login = async (req, res) => {
  // #swagger.tags = ['Auth']
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createJWT(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user });
  } catch (err) {
    console.log(err);
    let errors = alertError(err);
    res.status(400).json({ errors });
  }
};

module.exports.verifyUser = (req, res, next) => {
  // #swagger.tags = ['Auth']
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        console.log(err.message);
      } else {
        let user = await User.findById(decodedToken.id);
        res.json(user);
        next();
      }
    });
  } else {
    next();
  }
};
module.exports.logout = (req, res) => {
  // #swagger.tags = ['Auth']
  res.cookie("jwt", "", { maxAge: 1 });
  res.status(200).json({ logout: true });
};
