import mongoose from "mongoose";

const connectDB = async () => {
   try {
      if (mongoose.connections[0].readyState) {
         console.log("Already connected");
         return;
      }
      mongoose.connect(process.env.MONGO_URI, {
         useFindAndModify: true,
         useUnifiedTopology: true,
         useNewUrlParser: true,
         useCreateIndex: true,
      });
      console.log(`DB connceted`);
   } catch (error) {
      throw error;
   }
};

export default connectDB;
