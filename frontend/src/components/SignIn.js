import React, { useState } from "react";
import axios from "axios";

const SignIn = ({setToken,setIsLogged,token}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messageAfterLogIN,setMessageAfterLogIN]=useState("")

const loginUser=()=>{
    axios.post("http://localhost:5000/login",{
        email:email,
        password:password,
    }).then((result)=>{
        setToken(result.data.token)
        setIsLogged(true)
        console.log(result.data);
        setMessageAfterLogIN(result.data.message)
    }).catch((err)=>{
        console.log(err.response.status)
        if(err.response.status==403){
            setMessageAfterLogIN(err.response.data.message)
        }
        else{setMessageAfterLogIN(err.response.data.message)}
    })
}

  return (
    <div>
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="email"
        placeholder="Email"
      /><br/>
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        placeholder="Password"
      /><br/>
      <button id="signUp" onClick={loginUser}>SignIn</button>
      <div>{messageAfterLogIN}</div>
    </div>
  )
}

export default SignIn;
