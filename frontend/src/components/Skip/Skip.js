import React, { useState, useEffect } from "react";
import axios from "axios";
import Model from "react-modal";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import "./Skip.css";

const Skip = ({ isLogged, token, searchDoctor, role, setDoctorId }) => {
  const navigate = useNavigate();
  const [allDoctor, setAllDoctor] = useState("");
  const [noResult, setNoResult] = useState("");
  const [comment, setComment] = useState("");

  localStorage.getItem("Token");

  const getAllDoctors = async () => {
    try {
      const result = await axios.get(`http://localhost:5000/doctors`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (result.data == `No result`) {
        setNoResult(result.data);
      } else {
        setAllDoctor(result.data.result);
      }
    } catch {}
  };

  const addComment = async (id) => {
    try {
      await axios.post(
        `http://localhost:5000/comment/${id}`,
        { comment },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      getAllDoctors();
    } catch (error) {
      console.log(error.response);
    }
  };

  const deleteDoctor = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/doctors/${id}`);
      getAllDoctors();
    } catch {}
  };

  const getDoctorById = async (id) => {
    navigate(`/doctor/${id}`);
  };

  useEffect(() => {
    getAllDoctors();
  }, []);
  return (
    <>
      {
        <div className="skipAllDoctors">
          <h1 className="titleTheDoctors">الأطباء</h1>
          <div className="allDoctor">
            {allDoctor ? (
              allDoctor
                .filter((doctorInformation) => {
                  if (searchDoctor == "") {
                    return doctorInformation;
                  } else if (
                    doctorInformation.firstName
                      .toLowerCase()
                      .includes(searchDoctor.toLowerCase()) ||
                    doctorInformation.lastName
                      .toLowerCase()
                      .includes(searchDoctor.toLowerCase()) ||
                    doctorInformation.specialized
                      .toLowerCase()
                      .includes(searchDoctor.toLowerCase()) ||
                    doctorInformation.address
                      .toLowerCase()
                      .includes(searchDoctor.toLowerCase())
                  ) {
                    return doctorInformation;
                  }
                })
                .map((element, index) => (
                  <div
                    key={index}
                    className="doctor"
                   
                  >
                    {role == "ADMIN" ||
                    localStorage.getItem("Role") == "ADMIN" ? (
                      <button
                        id="deleteButton"
                        onClick={() => {
                          deleteDoctor(element._id);
                        }}
                      >
                        X
                      </button>
                    ) : (
                      <></>
                    )}
                    <div className="profile">
                      <img  onClick={() => {
                      getDoctorById(element._id);
                    }} id="imageDoctor" src={element.image}></img>
                      <h2 id="nameDoctor">
                        {" "}
                        {element.firstName} {element.lastName}{" "}
                      </h2>
                      <p id="specializedDr">{element.specialized}</p>
                      <p id="specializedDr">{element.address}</p>
                    </div>
                  </div>
                ))
            ) : (
              <div>{noResult}</div>
            )}
          </div>
        </div>
      }
    </>
  );
};

export default Skip;
