import express from 'express';

const server = express();
const port = 2000;

// C = Create => POST (method)
// R = Read => GET (method)
// U = Update => PUT (method)
// D = Delete => DELETE (method)

server.listen(port,()=>console.log(`Server is running on Port : ${port}`));
