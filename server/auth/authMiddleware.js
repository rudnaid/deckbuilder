import jwt from "jsonwebtoken";
import "dotenv/config";

const authMiddleWare = (req, res, next) => {
  console.log(req.get('Authorization'));

  const token = req.get('Authorization');
  if (!token) {
    return res.status(401).json({ message: "No Token found" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(403).json({ message: "Token is not valid" });
  }
};

export default authMiddleWare;
