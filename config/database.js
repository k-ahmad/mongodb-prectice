const dns = require('dns');
const mongoose = require("mongoose");

dns.setServers(['8.8.8.8', '8.8.4.4']);

const connectdb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log("database connected");
  } catch (error) {
    console.error(`database connection failed: ${error}`);

    process.exit(1);
  }
};

module.exports = connectdb;