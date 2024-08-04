// index.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const BlogModel = require("./model");
require("./connection"); 

const app = express();
var PORT = 3001;

app.use(express.json());
app.use(cors());

// This for POST
app.post("/add", async (req, res) => {
  try {
    const { title, content, img_url } = req.body;
    const newBlog = new BlogModel({ title, content, img_url });
    await newBlog.save();
    res.status(201).send({ message: "Blog added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});
// to fetch
app.get("/get", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

// to remove
app.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await BlogModel.findByIdAndDelete(id);
    res.status(200).send({ message: "Blog deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});


app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
