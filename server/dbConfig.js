const mongoose = require("mongoose");

const connect_to_mongo_server = async () => {
  try {
    await mongoose.connect("mongodb://localhost/inspiration", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB is connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect_to_mongo_server;
