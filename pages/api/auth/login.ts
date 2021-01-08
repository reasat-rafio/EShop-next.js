import { createAccessToken } from "./../../../utils/generateToken";
import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../utils/connectDB";
import User from "../../../models/userModels";
// import bcrypt from "bcrypt";

connectDB();

export default async (req: NextApiRequest, res: NextApiResponse) => {
   switch (req.method) {
      case "POST":
         await login(req, res);
         break;
   }
};

const login = async (req: NextApiRequest, res: NextApiResponse) => {
   try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });
      if (!user)
         return res.status(400).json({ err: "This user does not exist." });

      // const isMatch = await bcrypt.compare(password, user.password);
      // if (!isMatch) return res.status(400).json({ err: "Incorrect password" });

      const access_token = createAccessToken({ id: user._id });
      const refresh_token = createAccessToken({ id: user._id });

      res.json({
         msg: "Login Success!",
         refresh_token,
         access_token,
         user: {
            name: user.name,
            email: user.email,
            role: user.role,
            avatar: user.avatar,
            root: user.root,
         },
      });
   } catch (error) {
      return res.status(500).json({ err: error.message });
   }
};
