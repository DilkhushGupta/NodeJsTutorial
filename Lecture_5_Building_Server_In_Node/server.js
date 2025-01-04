// console.log("Building Sever in NodeJs");

import http from 'http';

const server = http.createServer((req,res)=>{
     res.end('<h1>You are requested for something..</h1>')
});

const port = 5000;

server.listen(port,()=>console.log(`Server is running on Port : ${port}`)
);


