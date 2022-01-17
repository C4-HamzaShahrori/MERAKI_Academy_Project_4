import React, { useState } from "react";
import "./App.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Skip from "./components/Skip/Skip.js";
import Navigation from "./components/Navigation";

function App() {
  const [token, setToken] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [userId, setUserId] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  return (
    <>
      <Navigation
        isLogged={isLogged}
        userId={userId}
        setToken={setToken}
        setIsLogged={setIsLogged}
        userFirstName={userFirstName}
        userLastName={userLastName}
        setUserFirstName={setUserFirstName}
        setUserLastName={setUserLastName}
      />
      <div className="App">
        <h1>healthApp</h1>
      </div>

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
            />
          }
        />
        <Route
          path="/AllDoctor"
          element={<Skip isLogged={isLogged} token={token} />}
        />
      </Routes>
    </>
  );
}

export default App;
