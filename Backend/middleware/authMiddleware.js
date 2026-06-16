const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {

  const token = req.headers.authorization;

  console.log("TOKEN:", token);
  console.log("SECRET:", process.env.JWT_SECRET);

  if (!token) {
    return res.status(401).json({
      message: "No Token"
    });
  }

  try {

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    console.log("DECODED:", decoded);

    req.user = decoded;

    next();

  } catch (error) {

    console.log("JWT ERROR:", error);

    return res.status(401).json({
      message: "Invalid Token"
    });
  }
};