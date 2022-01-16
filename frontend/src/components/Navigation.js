import React,{useState} from "react"


import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";


const Navigation=({isLogged,userId,setIsLogged,setToken})=>{
  const navigate=useNavigate()
  // const[allUser,setAllUser]=useState("")
  // const getUserById=()=>{

  // }

  const logout = () => {
    setIsLogged(false);
    localStorage.clear();
    setToken("")
    navigate("/signIn")
  };
    return(
      <>
      <div className="NavigationBar">
        {isLogged?(<>   <a id="Home" href="/">Home</a>
        <a onClick={logout} id="SignIn" >Logout</a>
       <a  id="SignUp" href="/signUp">SignUp</a></>):(<>   <a id="Home" href="/">Home</a>
        <a id="SignIn" href="/signIn">SignIn</a>
       <a id="SignUp" href="/signUp">SignUp</a></>)}
   
    </div>
    </>
    )
}


export default Navigation