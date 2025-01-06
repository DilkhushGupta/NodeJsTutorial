import express from 'express';

const app = express();
const port = 2000;


let name = "ram";
const products = [
  {title : "iphone - 15", price : 65000},
  {title : "iphone - 16", price : 75000},
  {title : "Glaxy - A3", price : 45000}
];

app.get('/',(req,res)=>{
     res.render('index.ejs',{name,products});
});

app.listen(port,()=>console.log(`Server is running on port : ${port}`));