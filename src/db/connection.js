const mongoose = require("mongoose");

// db connection
 
const connection = async () =>  {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB is working");
};

module.exports = connection;
 
