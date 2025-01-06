import { log } from 'console';
import express from 'express';
import path from 'path';

const product = [
  {title : "Salt", price : 29},
  {title : "Oil", price : 160},
  {title : "Rice", price : 50},
  {title : "Pulse", price : 90},
]

const app = express();
const port = 3000;

//send JSON

// app.get('/',(req,res)=>{
//   res.json({
//     message : "All products are fetched.",
//     products : product,
//     success : true
//   })
// })

// send html tag

// app.get('/',(req,res)=>{
//     res.send('<h1>Hii! Welcome to NodeJs Tutorial</h1>');
// })

//send html file

const absolutePth = path.resolve();
console.log(absolutePth);

const url = path.join(absolutePth,'./index.html');
console.log(url);



app.get('/',(req,res)=>{
  res.sendFile(url);
})



app.listen(port,()=>console.log(`Server is running on Port : ${port}`))