// console.log("We are learning Routing...");

import http from 'http';

const server = http.createServer((req,res)=>{
  // console.log(req.url);

  if(req.url === '/patna'){
    res.end('<h1>Welcome to patna!</h1>');   
  }
  else if(req.url === '/cimage'){
    res.end('<h1>Welcome to Cimage!</h1>');  
  }
  else{
    res.end('<h1>Invalid request</h1>');
  }
  
});

const port = 4000;

server.listen(port,()=>console.log(`Server is running on ${port}`));

