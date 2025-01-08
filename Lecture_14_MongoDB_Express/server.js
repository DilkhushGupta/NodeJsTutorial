import express from 'express';
import mongoose from 'mongoose';

mongoose.connect(
  "mongodb+srv://guptadilkhush3:5W0TPOFUXBjthUoG@cluster0.tz357.mongodb.net/",{
    dbName : "NodeJs"
  }   
).then(()=>console.log("MongoDB is Connected...")).catch((err)=>console.log(err))

const app = express();


const port = 1000;

app.listen(port,()=>console.log(`Server is running on port : ${port}`))