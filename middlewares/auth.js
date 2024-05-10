import jwt from "jsonwebtoken";

const authenticateMiddleware = async (req, res, next) => {
  console.log(req.headers);
  const authHeader = req.headers.authorization;
  console.log(authHeader);
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(400).json({ error: "No header found" });
  }

  const token = authHeader.split(' ')[1]
  const jwt_string = "123123123asdfhasdfhaklh3892"
  try {
      const decoded = jwt.verify(token,jwt_string);
      console.log(decoded)
      next()
  } catch (error) {
      res.status(400).json({error:"Invalid Token"})
  }
};

export default authenticateMiddleware;
