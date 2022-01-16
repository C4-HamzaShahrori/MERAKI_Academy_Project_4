import React, { useState } from "react";
import axios from "axios";
import { Routes, Route, Link, Navigate } from "react-router-dom";
const SignUp = () => {
  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [age,setAge]=useState(0)
  const[country,setCountry]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [onSaveUser,setOnSaveUser]=useState("")

  const saveUser=()=>{
    axios.post("http://localhost:5000/users",{
      firstName:firstName,
      lastName:lastName,
      age:age,
      country:country,
      email:email,
      password:password,
      role:"61dc9aa3a4261a465e4991b9"


    }).then((result)=>{
      setOnSaveUser(result.data.message)
    }).catch((err)=>{
      setOnSaveUser(err.response.data.message)
    })
  }
  return (
    <div>
      <h1 id="headerSinUp">SignUp:</h1>
      <input  onChange={(e)=>{
        setFirstName(e.target.value)
      }} type="text" placeholder="FirstName here ..." /> <br />
      <input onChange={(e)=>{
        setLastName(e.target.value)
      }} type="text" placeholder="LastName here ..." />
      <br />
      <input onChange={(e)=>{
        setAge(e.target.value)
      }} type="number" placeholder="Age here ..." />
      <br />
      <input onChange={(e)=>{
        setCountry(e.target.value)
      }} type="text" placeholder="Country here ..." />
      <br />
      <input onChange={(e)=>{
        setEmail(e.target.value)
      }}type="email" placeholder="Email here ..." />
      <br />
      <input   onChange={(e)=>{
        setPassword(e.target.value)
      }}type="password" placeholder="Password here ..." />
      <br />
      <button  onClick={saveUser} id="signIn">SinUp</button>
      <div>{onSaveUser}</div>
    </div>
  );
};

export default SignUp;