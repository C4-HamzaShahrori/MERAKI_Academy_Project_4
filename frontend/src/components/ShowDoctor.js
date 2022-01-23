import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

const ShowDoctor = ({ doctorId, token,userId }) => {
  localStorage.getItem("Token");

  const { id } = useParams();

  const navigate = useNavigate();
  const [doctorDetails, setDoctorDetails] = useState("");
  const [comment, setComment] = useState("");
const [image,setImage]=useState("")





  const getDoctorById = async () => {
    try {
      const result = await axios.get(`http://localhost:5000/doctors/${id}`);

      setDoctorDetails(result.data.result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDoctorById();
  }, []);

  const addComment = async () => {
    try {
      await axios.post(
        `http://localhost:5000/comment/${id}`,
        { comment },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      getDoctorById();
    } catch (error) {
      console.log(error.response);
    }
  };



  const getUserById = async () => {
    try {
      const result = await axios.get(`http://localhost:5000/users/${ localStorage.getItem("UserId")}`);
console.log(result.data);
      setImage(result.data.user.image)

   
    } catch (error) {
      console.log(error.response);
    }
  };
console.log(image);
  useEffect(() => {
  
      getUserById();
    
  }, [userId]);

  return (
    <>
      <div className="containerProfile">
        <div className="DrProfile">
          {doctorDetails &&
            doctorDetails.map((details, i) => (
              <>
                <div className="info">
                  <h1>
                    الدكتور :
                    <span>
                      {" "}
                      {details.firstName} {details.lastName}
                    </span>
                  </h1>
                  <br></br>
                  <p>
                    {" "}
                    اختصاص :<span> {details.specialized}</span>
                  </p>
                  <br></br>
                  <p>
                    الكشفيه :<span> {details.price} </span>
                  </p>
                  <br></br>
                  <p>
                    رقم التواصل :<span> {details.numberPhone} </span>
                  </p>
                  <br></br>
                  <p>
                    العنوان :<span> {details.address}</span>
                  </p>
                  <br></br>
                  <h2 className="commentH">تعليقات</h2>
                  <div className="containerComment">
                    {details.comment ? (
                      details.comment.map((comment, index) => {
                        return (
                          <form className="comment" key={index}>
                           <img className="imageUser" src={image}></img> <br></br> 
                           <p className="NameUser">{localStorage.getItem("FirstName")} {localStorage.getItem("LastName")}</p>
                           {comment.comment}
                          </form>
                        );
                      })
                    ) : (
                      <></>
                    )}
                  </div>
                </div>

                <div className="DrImage">
                  <img className="profile-image" src={details.image}></img>
                  <img className="backImage" src="../image/8.jpg" />
                </div>

                {localStorage.getItem("Token") ? (
                  <>
                    <div className="containerInputComment">
                      <h1>اترك تعليق</h1>
                      <form>
                        <textarea
                          className="AddComment"
                          placeholder="أضف تعليق"
                          onChange={(e) => {
                            setComment(e.target.value);
                          }}
                        />
                      </form>
                      <div className="btn">
                        <button
                          className="commentButton"
                          onClick={() => {
                            addComment();
                          }}
                        >
                          أضف
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default ShowDoctor;
