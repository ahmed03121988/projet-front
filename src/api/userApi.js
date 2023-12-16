import axios from "axios"


// register api 

export const signUp = async(values)=>{

    
    const {data}= await axios.post('https://movieland-wnve.onrender.com/api/register',{...values})


    return data ;
}

export const SignIn = async(values)=>{
  
    const {data} = await axios.post('https://movieland-wnve.onrender.com/api/login',{...values})
  return data ;
}

