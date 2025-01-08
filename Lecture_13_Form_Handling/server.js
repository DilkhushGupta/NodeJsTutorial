import { log } from 'console';
import express from 'express';

const app = express();
const port = 4000;

app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
  res.render('index.ejs');
})

app.post('/form-submit',(req,res)=>{
  res.json({
    message : "Your form has been submitted.",
    success : true
  })
})

app.listen(port,()=>console.log(`Server is running on port : ${port}`));