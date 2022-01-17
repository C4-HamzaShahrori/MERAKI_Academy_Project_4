import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, Link, Navigate } from "react-router-dom";
// import { all } from "../../../backend/routes/recommendedDr";
import "./Skip.css";

const Skip = ({ isLogged, token }) => {
  const [allDoctor, setAllDoctor] = useState("");
  const [noResult, setNoResult] = useState("");
  const [comment, setComment] = useState("");
  localStorage.getItem("Token");
  // console.log(token);
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
        // console.log(result.data.result);
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
      setComment("")
      getAllDoctors();
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getAllDoctors();
  }, []);
  return (
    <>
      {token ? (
        <div className="skipAllDoctors">
          <div>
            {allDoctor ? (
              allDoctor.map((element, index) => (
                <div key={index} className="doctor">
                  <div>
                    {" "}
                    <img id="imageDoctor" src={element.image}></img>
                  </div>
                  <div>
                    {" "}
                    <p>
                      specialized:{element.specialized}
                      <br />
                      FirstName:{element.firstName}
                      <br />
                      LastName:{element.lastName}
                      <br />
                      Address:{element.address}
                      <br />
                      NumberPhone:{element.numberPhone}
                      <br />
                    </p>
                  </div>
                  <div>
                    {element.comment ? (
                      element.comment.map((comment, index) => {
                        return (
                          <p className="comment" key={index}>
                            {comment.comment}
                          </p>
                        );
                      })
                    ) : (
                      <></>
                    )}
                  </div>
                  {
                    <div>
                      <textarea
                        className="comment"
                        placeholder="comment..."
                        onChange={(e) => {
                          setComment(e.target.value);
                        }}
                      />
                      <button
                        className="commentButton"
                        onClick={() => {
                          addComment(element._id);
                        }}
                      >
                        Add comment
                      </button>
                    </div>
                  }
                </div>
              ))
            ) : (
              <div>{noResult}</div>
            )}
          </div>
        </div>
      ) : (
        <>
          <br></br>
          <div className="skipAllDoctors">
            {/* <div className="NavSkip" ><button id="Home">Home</button>
            <button id="SignIn">SignIn</button>
            <button id="SignUp">SignUp</button></div> */}
            <div>
              {allDoctor ? (
                allDoctor.map((element, index) => (
                  <div key={index} className="doctor">
                    <div>
                      {" "}
                      <img id="imageDoctor" src={element.image}></img>
                    </div>
                    <div>
                      {" "}
                      <p>
                        specialized:{element.specialized}
                        <br />
                        FirstName:{element.firstName}
                        <br />
                        LastName:{element.lastName}
                        <br />
                        Address:{element.address}
                        <br />
                        NumberPhone:{element.numberPhone}
                        <br />
                      </p>
                    </div>
                    <div>
                      {element.comment ? (
                        element.comment.map((comment, index) => {
                          return (
                            <p className="comment" key={index}>
                              {comment.comment}
                            </p>
                          );
                        })
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div>{noResult}</div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Skip;