import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: true,
      },
      email: {
         type: String,
         required: true,
         unique: true,
      },
      password: {
         type: String,
         required: true,
      },
      role: {
         type: String,
         default: "user",
      },
      root: {
         type: Boolean,
         default: false,
      },
      avatar: {
         type: String,
         default:
            "https://res.cloudinary.com/dapjxqk64/image/upload/v1606731176/samples/cloudinary-icon.png",
      },
   },
   {
      timestamps: true,
   }
);

let DataSet = mongoose.models.user || mongoose.model("user", userSchema);

export default DataSet;
