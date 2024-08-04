
const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://projdb:abcd%401234@cluster0.yoqqqcw.mongodb.net/final?retryWrites=true&w=majority&appName=Cluster0")  // Replace with your MongoDB URI and database name
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.error("DB Connection Error: ", error);
  });
