import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import  Model  from "react-modal";
Model.setAppElement('#root')
const SignIn = ({
  setToken,
  setIsLogged,
  token,
  setUserId,
  setUserLastName,
  setUserFirstName,
  userId,
  setRole
}) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messageAfterLogIN, setMessageAfterLogIN] = useState("");
  const [modelIsOpen,setModelIsOpen]=useState(true)
  // const [tokenInLocalStorage, setTokenInLocalStorage] = useState("");
  localStorage.setItem("Token", token);
  const loginUser = () => {
    axios
      .post("http://localhost:5000/login", {
        email: email,
        password: password,
      })
      .then( (result) => {
        setRole(result.data.role)
        setToken(result.data.token);
        setIsLogged(true);
        console.log(result.data.userId);
        setUserId(result.data.userId);
       
        // console.log(result.data.role);
        // console.log(result.data);
        // const role =result.data.role.role
        
        setMessageAfterLogIN(result.data.message);
        navigate("/AllDoctor");
      })
      .catch((err) => {
        console.log(err.response.status);
        if (err.response.status == 403) {
          setMessageAfterLogIN(err.response.data.message);
        } else {
          setMessageAfterLogIN(err.response.data.message);
        }
      });
  };
  
  return (
    <div>
  <Model isOpen={modelIsOpen}  onRequestClose={()=>{setModelIsOpen(false)
   navigate("/")}}>
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="email"
        placeholder="Email"
      />
      <br />
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        placeholder="Password"
      />
      <br />
      <button id="signUp" onClick={loginUser}>
        SignIn
      </button>
      <div>{messageAfterLogIN}</div>
      </Model>
    </div>
  );
};

export default SignIn;


