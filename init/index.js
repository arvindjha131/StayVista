const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

// Use async/await and try-catch for error handling
async function main() {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to DB");
    
    // Initialize the database
    await initDB();
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

// Initialize the database with data
// const initDB = async () => {
//   try {
//     // Clear existing data in the Listing collection
//     await Listing.deleteMany({});
    
//     // Modify the data with the owner field added
//     initData.data = initData.data.map((obj) => ({ ...obj, owner: "6745623e90d85f0dea361f1e" }));
    
//     // Insert the modified data into the Listing collection
//     await Listing.insertMany(initData.data);
//     console.log("Data was initialized");
//   } catch (err) {
//     console.error("Error initializing data:", err);
//   }
// };

// Run the main function
main();
