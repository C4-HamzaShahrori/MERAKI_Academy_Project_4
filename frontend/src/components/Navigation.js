import axios from "axios";
import React, { useState, useEffect } from "react";
// import logo from '../image/logo.png'
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";

const Navigation = ({
  isLogged,
  userId,
  setIsLogged,
  setToken,
  userLastName,
  userFirstName,
  setUserLastName,
  setUserFirstName,
  setSearchDoctor,
  role,
  setModelNewDoctor,
  token
}) => {
  
  
  // console.log(userId);
  const navigate = useNavigate();
  
  const getUserById = async () => {
    try {
      const result = await axios.get(`http://localhost:5000/users/${userId}`);
      // console.log(result.data.user.firstName);
    
      setUserFirstName(result.data.user.firstName);
      setUserLastName(result.data.user.lastName);
      
      localStorage.setItem("FirstName", result.data.user.firstName)
      localStorage.setItem("LastName", result.data.user.lastName)
    
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
   if( userId){getUserById()} 
  }, [userId]);



  



  const logout = () => {
    setIsLogged(false);
    localStorage.clear();
    setToken("");
    navigate("/");
  };
  return (
    <>
    <div className="container">
      <div className="NavigationBar">
        {localStorage.getItem("Token")? (
          <>
            <img id="logo" src='../image/logo1.png'/>
            <nav className="nav">
            <ul className="nav-links">
              <li>  <a id="Home" href="/">
              الرئيسية
            </a></li>

            <li> <a onClick={logout} id="logout">
            تسجيل خروج
            </a></li>

            <li>   <a id="nameUser" href="">
              {userFirstName ||localStorage.getItem("FirstName")} {localStorage.getItem("LastName")||userLastName}
            </a></li>

            <li> {role=="ADMIN" ||localStorage.getItem("Role")=="ADMIN"?( <a id="Home" onClick={()=>{setModelNewDoctor(true)}}>
             Add Doctor
            </a>):(<></>)}</li>

            </ul>
            </nav>
            {/* <input id="searchInput" type="text" placeholder="Search..." onChange={(e)=>{setSearchDoctor(e.target.value)}}/> */}
           
         
           
          </>
        ) : (
          <>
            {" "}
            <a id="Home" href="/">
              Home
            </a>
            <input id="searchInput" type="text" placeholder="Search..." onChange={(e)=>{setSearchDoctor(e.target.value)}}/>
            <i className="search icon "></i>
            <a id="SignIn" href="/signIn">
              SignIn
            </a>
            <a id="SignUp" href="/signUp">
              SignUp
            </a>
          </>
        )}
      </div>
      <div  className="row"> 
      <div className="col">
<h1 className="FindDoctor">!ابحث عن طبيب</h1>
   <input id="searchInput" type="text" placeholder="مثال.الاسم،التخصص " onChange={(e)=>{setSearchDoctor(e.target.value)}}/>
      </div>
      <div className="col">
<div className="card card1">
  <h5 className="tips">كوفيد-19</h5>
  <p>ضَع كمامة،أنقِذ حياة غيرك</p>
</div>
<div className="card card2">
  <h5 className="tips">كوفيد-19</h5>
  <p>اغسِل يديك</p>
</div>
<div className="card card3">
  <h5 className="tips">كوفيد-19</h5>
  <p>أبقِ مسافة آمنة</p>
</div>
<div className="card card4">
  <h5 className="tips">كوفيد-19</h5>
  <p>ابقَ في المنزل إذا شعرت بالمرض</p>
</div>
      </div>
      
        </div>
      </div>
    </>
  );
};

export default Navigation;
