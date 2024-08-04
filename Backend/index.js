// index.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const BlogModel = require("./model");
require("./connection"); // Ensure this line is present to connect to MongoDB

const app = express();
var PORT = 3001;

app.use(express.json());
app.use(cors());

// POST API to add a new blog post
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

app.get("/get", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
