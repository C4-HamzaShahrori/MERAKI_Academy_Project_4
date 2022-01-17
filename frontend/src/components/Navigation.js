import axios from "axios";
import React, { useState, useEffect } from "react";

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
  setModelNewDoctor
}) => {
  const navigate = useNavigate();

  const getUserById = async () => {
    try {
      const result = await axios.get(`http://localhost:5000/users/${userId}`);
      // console.log(result.data.user.firstName);
      setUserFirstName(result.data.user.firstName);
      setUserLastName(result.data.user.lastName);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getUserById();
  }, [isLogged]);

  const logout = () => {
    setIsLogged(false);
    localStorage.clear();
    setToken("");
    navigate("/");
  };
  return (
    <>
      <div className="NavigationBar">
        {isLogged ? (
          <>
            {" "}
            <a id="Home" href="/">
              Home
            </a>
            <input id="searchInput" type="text" placeholder="Search..." onChange={(e)=>{setSearchDoctor(e.target.value)}}/>
            <a onClick={logout} id="SignIn">
              Logout
            </a>
            <a id="SignUp" href="#">
              {userFirstName} {userLastName}
            </a>
            {role=="ADMIN"?( <a id="Home" onClick={()=>{setModelNewDoctor(true)}}>
             Add Doctor
            </a>):(<></>)}
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
    </>
  );
};

export default Navigation;
