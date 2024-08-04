
const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://projdb:abcd%401234@cluster0.yoqqqcw.mongodb.net/final?retryWrites=true&w=majority&appName=Cluster0")  
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.error("DB Connection Error: ", error);
  });
