import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.join(path.resolve(),'public')));

const port = 3000;

app.get('/',(req,res)=>{
  res.render('index.ejs');
})

app.listen(port,()=>console.log(`Server is running on port : ${port}`));