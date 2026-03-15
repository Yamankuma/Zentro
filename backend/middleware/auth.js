const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {

  const header = req.headers.authorization;

  if (!header) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = header.split(" ")[1];   // ✅ Bearer remove

  try {

    const decoded = jwt.verify(token, "secretkey");

    req.userId = decoded.id;

    next();

  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }

};

module.exports = verifyToken;