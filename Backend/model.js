
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Email: String,
  Phoneno: Number,
  Username: String,
  Password: String
});

module.exports = mongoose.model('userDetail',userSchema);