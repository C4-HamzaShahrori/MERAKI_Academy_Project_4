import React, { useState } from "react";
import axios from "axios";
import Model  from "react-modal";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
Model.setAppElement('#root')
const SignUp = () => {
  const navigate=useNavigate()
  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [age,setAge]=useState(0)
  const[country,setCountry]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [onSaveUser,setOnSaveUser]=useState("")
  const [modelIsOpen,setModelIsOpen]=useState(true)
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
      navigate("/signIn")
    }).catch((err)=>{
      setOnSaveUser(err.response.data.message)
    })
  }
  return (
  
      <Model className="divSignUp" isOpen={modelIsOpen}  onRequestClose={()=>{setModelIsOpen(false)
   navigate("/")}}>
     
      <h2 id="headerSinUp">مستخدم جديد</h2>
      <input className="inputSignup " onChange={(e)=>{
        setFirstName(e.target.value)
      }} type="text" placeholder="الاسم الاول" /> <br />
      <input className="inputSignup" onChange={(e)=>{
        setLastName(e.target.value)
      }} type="text" placeholder="الاسم الاخير " />
      <br />
      <input className="inputSignup" onChange={(e)=>{
        setAge(e.target.value)
      }} type="number" placeholder="العمر" />
      <br />
      <input className="inputSignup" onChange={(e)=>{
        setCountry(e.target.value)
      }} type="text" placeholder="البلد" />
      <br />
      <input className="inputSignup" onChange={(e)=>{
        setEmail(e.target.value)
      }}type="email" placeholder="بريد الالكتروني 
      " />
      <br />
      <input  className="inputSignup"  onChange={(e)=>{
        setPassword(e.target.value)
      }}type="password" placeholder="كلمة المرور" />
      <br />
      <button  onClick={saveUser} id="signIn">اشتراك</button>
      <div>{onSaveUser}</div>
      </Model>
   
  );
};

export default SignUp;
