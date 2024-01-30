import mongoose from "mongoose";
const mongoURI = "mongodb+srv://<username>:<password>@studentdb.tqsekqz.mongodb.net/Student_DB";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
export default connectToMongo;
