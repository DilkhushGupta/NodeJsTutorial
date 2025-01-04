import express from 'express';

const server = express();
const port = 2000;

server.get('/',(req,res)=>{
    res.send("You are requested for home route.");
})
server.get('/patna',(req,res)=>{
  res.send("Welcome to Patna!");
})
server.get('/cimage',(req,res)=>{
  res.send("Welcome to Cimage!");  
})

server.listen(port,()=>console.log(`Server is running on port : ${port}`));