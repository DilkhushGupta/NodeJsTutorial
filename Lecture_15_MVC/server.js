import express, { urlencoded } from "express";
import mongoose from "mongoose";
import { userRegister } from "./Controllers/user.js";

const app = express();
app.use(express.urlencoded({extended:true}))

mongoose.connect(
  "mongodb+srv://guptadilkhush3:5W0TPOFUXBjthUoG@cluster0.tz357.mongodb.net/",{
    dbName : "NodeJs"
  }
).catch(()=>console.log("MongoDB is connected..")).catch((err)=>console.log(err))

app.get('/',(req,res)=>{
  res.render('index.ejs')
})

app.post('/form-submit',userRegister)

const port = 2000;

app.listen(port,()=>console.log(`Server is running on port : ${port}`))