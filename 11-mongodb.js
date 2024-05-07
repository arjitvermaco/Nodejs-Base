import mongoose from "mongoose";

const dbUrl =
  "mongodb+srv://arjitvermago:jKSInc7mgR8KiJ8Y@testcluster.jqf8din.mongodb.net/?retryWrites=true&w=majority&appName=TestCluster";

const connectDB = () => {
  mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
};

connectDB();

const userSchema = new mongoose.Schema({
  name : String,
  age:Number
})

//Create model
const User = mongoose.model('User',userSchema)



User.find().then(data=>console.log(data))

// //Create Document To Save

// const newUser = new User({name:'Jason',age:32})

// //Saving the data

// newUser.save().then(doc=>console.log(doc))