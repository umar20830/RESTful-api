const mongoose = require("mongoose");


const dbConnection = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/restful");
        console.log("mongodb connection established.....");
    } catch (err) {
        console.log("In mongoose connection ", err.message);
        process.exit(1);
    }
}

module.exports = dbConnection;