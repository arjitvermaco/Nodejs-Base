import mongoose from "mongoose";

const dbUrl =
  "mongodb+srv://arjitvermago:jKSInc7mgR8KiJ8Y@testcluster.jqf8din.mongodb.net/?retryWrites=true&w=majority&appName=TestCluster";


const connectDB = () => {
    mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
};

export default connectDB;