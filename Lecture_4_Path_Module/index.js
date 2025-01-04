// console.log("We are learning Path Module..");

import path from 'path';

//join two or more file.
const fullPath = path.join('/path','index.html','demo.py');
// console.log("Files Join : ",fullPath);

// absolute path  
const absolutePth = path.resolve();
// console.log(absolutePth);

const extname = path.extname('resume.docs');

console.log("Extension : ",extname);

if(extname == '.pdf') {
     console.log("Ok.");
}
else{
  console.log("Not Supported.");
  
}


