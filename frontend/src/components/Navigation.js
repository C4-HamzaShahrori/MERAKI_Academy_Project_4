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
  setModelNewDoctor,
  token,
}) => {
  const navigate = useNavigate();

  const getUserById = async () => {
    try {
      const result = await axios.get(`http://localhost:5000/users/${userId}`);

      setUserFirstName(result.data.user.firstName);
      setUserLastName(result.data.user.lastName);

      localStorage.setItem("FirstName", result.data.user.firstName);
      localStorage.setItem("LastName", result.data.user.lastName);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    if (userId) {
      getUserById();
    }
  }, [userId]);

  const logout = () => {
    setIsLogged(false);
    localStorage.clear();
    setToken("");
    navigate("/");
  };

  const convertTo = () => {
    navigate("/NEw-Doctor");
  };
  return (
    <>
      <div className="NavigationBar">
        <img id="logo" src="../image/logo1.png" />
        <h5 id="headerLogo">FINDOCTOR</h5>

        <input
          id="searchInput"
          type="text"
          placeholder="مثال.الاسم،التخصص"
          onChange={(e) => {
            setSearchDoctor(e.target.value);
          }}
        />
        <nav className="nav">
          <ul className="nav-links">
            <Link to="/">
              {" "}
              <li>
                {" "}
                <a id="Home">الرئيسية</a>
              </li>
            </Link>
            {localStorage.getItem("Token") ? (
              <>
                <Link to="/New-Doctor">
                  {" "}
                  <li>
                    {" "}
                    {role == "ADMIN" ||
                    localStorage.getItem("Role") == "ADMIN" ? (
                      <a id="Home">أضف طبيب</a>
                    ) : (
                      <></>
                    )}
                  </li>
                </Link>

                <li>
                  {" "}
                  <a onClick={logout} id="logout">
                    تسجيل خروج
                  </a>
                </li>

                <li>
                  {" "}
                  <a id="nameUser" href="">
                    <p>
                      {" "}
                      مرحبا{" "}
                      <span>
                        {userFirstName || localStorage.getItem("FirstName")}{" "}
                        {localStorage.getItem("LastName") || userLastName}
                      </span>
                    </p>
                  </a>
                </li>
              </>
            ) : (
              <>
                <Link to="/signIn">
                  {" "}
                  <li>
                    {" "}
                    <a id="SignIn">تسجيل الدخول</a>
                  </li>
                </Link>
                <Link to="/signUp">
                  {" "}
                  <li>
                    {" "}
                    <a id="SignUp">مستخدم جديد</a>
                  </li>
                </Link>
              </>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
