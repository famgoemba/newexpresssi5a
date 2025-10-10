const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(
            // ambil drivers di mongodb.com
            "mongodb+srv://Bryan:Bryan@famgoemba.w60huxf.mongodb.net/si5apaw2?retryWrites=true&w=majority&appName=Famgoemba"
        );
        console.log("MongoDB connected.");
    } catch (error) {
        console.error("Error : ", error);
        process.exit(1);
    }
}

module.exports = connectDB;