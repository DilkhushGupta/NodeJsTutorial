import { User } from "../Models/User";

export const userRegister = async(req,res)=>{
  
  try{
    let user = await User.create(req.body)
    res.json({
      message : "Your form has been submitted..",
      newUser : user,
      success : true    
    })
  }
  catch(error){
    re.json({message:error.message})
  } 
  
}