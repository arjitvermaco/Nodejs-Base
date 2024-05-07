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

//Find item by id
// User.findById('6639a97a8dec751ab8c387f1').then(data => console.log("Data for single item",data))

//Delete item by id

// User.findByIdAndDelete('6639a97a8dec751ab8c387f1').then(data=> console.log("Deleted Item",data))

//CRUD 
// Create Read Update and Delete 

User.findByIdAndUpdate('6639a9acee382c8a0a4f15bb',{name:"Ankit Singh"}).then(data =>console.log(data))