const mongoose = require("mongoose");
const subscriberModel = require("./models/subscribers");
const data = require("./data");

// Connect to DATABASE
// Mongodbcompass URL
// const DATABASE_URL = "mongodb://localhost/subscribers";

// Cluster URL
const DATABASE_URL =
  "mongodb+srv://shivchandrakumar19924220:shiv1234@cluster0.ycgzrrh.mongodb.net/";

  //Connect to MongoDB using Mongoose
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
// If an error occurs during connection, handle and log the error
db.on("error", (err) => console.log(err));

// If the connection is successful, log a success message
db.once("open", () => console.log("Database created..."));

const refreshAll = async () => {
  await subscriberModel.deleteMany({});
  // console.log("Deleting Previous Data")
  await subscriberModel.insertMany(data);
  // console.log("Inserting Data");
  await mongoose.disconnect();
  // console.log("Database Disconnect")
};
refreshAll();
