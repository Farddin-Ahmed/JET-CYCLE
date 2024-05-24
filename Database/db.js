const mongoose = require("mongoose")

let url = "mongodb://localhost:27017/JET-CYCLE"

mongoose.connect(url);

const db = mongoose.connection;

db.on("connected", () =>{
    console.log("Database connected successfully");
})
db.on("error", () =>{
    console.log("Some error is occured");
})
db.on("disconnected", () =>{
    console.log("Database is disconnected");
})

module.exports = db;