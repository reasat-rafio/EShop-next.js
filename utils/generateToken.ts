import jwt from "jsonwebtoken";

export const createAccessToken = (payload) => {
   return jwt.sign(payload, process.env.ACESS_TOKEN_SECRET, {
      expiresIn: "15m",
   });
};

export const createRefreshToeken = (payload) => {
   return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: "7d",
   });
};
