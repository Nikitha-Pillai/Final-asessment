
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userschema=require('./model');
require("./connection"); 

const app = express();
var PORT = 3001;

app.use(express.json());
app.use(cors());

// This for POST
app.get('/users',async(req,res)=>{
  try{
    const data=await userschema.find();//data contain all the records of the all the users
    res.send(data);
  }
  catch{
    res.send('error found');
    console.error();
  }
});
//login
app.post('/loginuser',async(req,res)=>{
  try{
    const{identifier,password}=req.body;//identifier is either email or username
   
    const user = await userschema.findOne({$or:[{user_id:identifier},{user_email:identifier}]})//$or is similiar to ||,but we cant use || directly in json
    if (!identifier || !password) {
      return res.status(400).send(' Username/email and password are required');
    }
    if(!user || user.user_password!==password)
    {
      return res.status(401).send('Invalid username/email or Incorrect password')
    }
    res.send(user);
  }
  catch(error){
    console.log(error);
    res.status(500).send('error occured in db');
  }
})
//get details by username or email
app.get('/user/:identifier',async(req,res)=>{
  try{
    const {identifier}= req.params;
    const data=await userschema.findOne({user_id:identifier});//data contain all the records of one users
    console.log(data);
    if(!data){
      data = await userschema.findOne({user_email:identifier});
    }
    if (!data) {
      return res.status(404).send('User not found');
    }
    res.send(data);
  }
  catch{
    res.send('error found');
    console.error();
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
