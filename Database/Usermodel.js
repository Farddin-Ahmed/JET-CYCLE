const mongoose = require("mongoose");

const userschema =new mongoose.Schema({
    Name: String,
    Password: String,
    Varify_Password: String,
    Mobile_no: Number,
    Email_id: String,
    Gender: String
})

const users = mongoose.model("userdata", userschema);

module.exports = users;