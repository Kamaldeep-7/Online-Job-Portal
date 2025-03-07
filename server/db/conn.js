const mongoose=require('mongoose');
const MongoURL = "mongodb+srv://kamal70kr:sYUZnxnEHsbV0hlX@online-job.wspsh.mongodb.net/?retryWrites=true&w=majority&appName=online-job";

const ConnectDB = async() => {
    try {
        await mongoose.connect(MongoURL);
        console.log("MongoDB Connected Succesfully...");
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
    }
    
}
module.exports = ConnectDB;
 // sYUZnxnEHsbV0hlX