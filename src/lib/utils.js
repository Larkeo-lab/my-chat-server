import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 วัน
  httpOnly: true,
  sameSite: process.env.NODE_ENV === "development" ? "lax" : "none", // ปรับค่า SameSite
  secure: process.env.NODE_ENV === "development" ? false : true, // secure เฉพาะ prod (HTTPS)
});


  return token;
};
