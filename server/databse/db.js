import mongoose from "mongoose";

function connection() {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "JWT_AUTH",
    })
    .then(() =>{
        console.log("Database Connected Successfully!");
    })
    .catch( err =>{
        console.log("ERROR while connecting to database: ",err);
    })
}

export default connection