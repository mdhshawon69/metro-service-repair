import mongoose from "mongoose";

const connectMongo = async () =>
  mongoose.connect(
    "mongodb+srv://hridoyrony85:QpXVIOnembOi1eRU@metrorepairandservice.titu33i.mongodb.net/?retryWrites=true&w=majority"
  );

export default connectMongo;
