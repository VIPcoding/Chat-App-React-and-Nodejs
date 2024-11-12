const express = require ("express");
const mongoose = require("mongoose");
require("./config/db");
const Users = require('./models/dataModels');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/register', async (req, res) => {
  try {
    const formData = new Users(req.body); 
    let savedData = await formData.save(); 
    savedData = savedData.toObject(); 
    delete savedData.password;
    console.log(savedData);
  res.status(201).json(savedData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all data
app.post('/login', async (req, res) => {
    const user = await Users.findOne(req.body).select("-password");
  if(user){
    res.send(user)
  }
  else{
    res.send("no user found")
  }

   
});




app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
  });