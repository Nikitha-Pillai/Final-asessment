
const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://varshasudeesh004:dftpafjmoLs3v0Rw@cluster0.abshkil.mongodb.net/userdb?retryWrites=true&w=majority&appName=Cluster0")  
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.error("DB Connection Error: ", error);
  });
