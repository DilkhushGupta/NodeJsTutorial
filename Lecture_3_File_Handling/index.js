import { readFile,writeFile,appendFile,mkdir} from "fs/promises";

//read file
const read_file = async (fileName) => {
  const data = await readFile(fileName, "utf-8");
  console.log(data);
  
};

// read_file("sample.txt");


//create file.
const create_file = async(fileName,content)=>{
  await writeFile(fileName,content);
  console.log("File created successfully...");  
}
// create_file('ai.py','#this is python file,Hello World');

//add content to file.

const append_file = async(fileName,content)=>{
  await appendFile(fileName,content);
  console.log("Extra content added successfully..");  
}

// append_file('ai.py','print(Hello! Python)');


//create folder - directory
const create_dir= async(dir)=>{
    await mkdir(dir,{recursive:true});
    console.log("Folder created Successlly..");    
}

// create_dir('components');
create_dir('src/components/java');

