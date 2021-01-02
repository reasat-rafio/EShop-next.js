import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../utils/connectDB";
import User from "../../../models/userModels";
import valid from "../../../utils/valid";
import bycript from "bcrypt";

connectDB();

export default async (req: NextApiRequest, res: NextApiResponse) => {
   switch (req.method) {
      case "POST":
         await register(req, res);
         break;
   }
};

const register = async (req: NextApiRequest, res: NextApiResponse) => {
   try {
      const { name, email, password, cf_password } = req.body;

      const errMsg = valid(name, email, password, cf_password);
      if (errMsg) return res.status(400).json({ err: errMsg });

      const user = await User.findOne({ email });
      if (user)
         return res
            .status(400)
            .json({ err: "This Email is already registerd" });

      const passwordHash = await bycript.hash(password, 12);

      const newUser = await User.create({
         name,
         email,
         password: passwordHash,
         cf_password: passwordHash,
      });

      console.log(newUser);
      res.json({ msg: "Register Success!" });
   } catch (error) {
      return res.status(500).json({ err: error.message });
   }
};
