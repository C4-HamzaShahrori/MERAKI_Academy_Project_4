import React, { useState } from "react";
import Model from "react-modal";
import { FaBeer } from "react-icons/fa";
import "./App.css";

import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Skip from "./components/Skip/Skip.js";
import Navigation from "./components/Navigation";

import NewDoctor from "./components/NewDoctor";
import ShowDoctor from "./components/ShowDoctor";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  const [token, setToken] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [userId, setUserId] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [searchDoctor, setSearchDoctor] = useState("");
  const [role, setRole] = useState("");
  const [modelNewDoctor, setModelNewDoctor] = useState(false);
  const [doctorId, setDoctorId] = useState("");
  const [doctorDetails, setDoctorDetails] = useState("");

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

      <Routes>
        <Route
          path="/"
          element={<Home setSearchDoctor={setSearchDoctor} token={token} />}
        />
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
          path="/New-Doctor"
          element={
            <NewDoctor
              modelNewDoctor={modelNewDoctor}
              setModelNewDoctor={setModelNewDoctor}
            />
          }
        />
        <Route
          path="/AllDoctor"
          element={
            <Skip
              isLogged={isLogged}
              token={token}
              searchDoctor={searchDoctor}
              role={role}
              setDoctorId={setDoctorId}
              setDoctorDetails={setDoctorDetails}
              doctorDetails={doctorDetails}
            />
          }
        />

        <Route
          path="/doctor/:id"
          element={
            <ShowDoctor
              isLogged={isLogged}
              token={token}
              searchDoctor={searchDoctor}
              doctorId={doctorId}
              token={token}
              userId={userId}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
