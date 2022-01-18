import React, { useState } from "react";
import Model from "react-modal";
import "./App.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Skip from "./components/Skip/Skip.js";
import Navigation from "./components/Navigation";
import NewDoctor from "./components/NewDoctor"
function App() {
  const [token, setToken] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [userId, setUserId] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [searchDoctor,setSearchDoctor]=useState('')
  const [role,setRole]=useState("")
  const [modelNewDoctor,setModelNewDoctor]=useState(false)
  
  // console.log(localStorage.getItem("Token"));
  return (
    <>
      <Navigation
      token={token}
        isLogged={isLogged}
        userId={userId}
        setToken={setToken}
        setIsLogged={setIsLogged}
        userFirstName={userFirstName}
        userLastName={userLastName}
        setUserFirstName={setUserFirstName}
        setUserLastName={setUserLastName}
        setSearchDoctor={setSearchDoctor}
        role={role}
        setModelNewDoctor={setModelNewDoctor}
      />
      <div className="App">
        <h1>healthApp</h1>
      </div>
<NewDoctor modelNewDoctor={modelNewDoctor}setModelNewDoctor={setModelNewDoctor}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route
          path="/signIn"
          element={
            <SignIn
              setUserFirstName={setUserFirstName}
              setUserLastName={setUserLastName}
              userId={userId}
              setToken={setToken}
              setIsLogged={setIsLogged}
              token={token}
              setUserId={setUserId}
              setRole={setRole}
            />
          }
        />
        <Route
          path="/AllDoctor"
          element={<Skip isLogged={isLogged} token={token} searchDoctor={searchDoctor} role={role}/>}
        />
           {/* <Route
          path="/NewDoctor"
          element={<NewDoctor isLogged={isLogged} token={token} searchDoctor={searchDoctor}/>}
        /> */}
      </Routes>
    </>
  );
}

export default App;
