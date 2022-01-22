import React, { useState, useEffect } from "react";
import axios from "axios";
import Model from "react-modal";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
// import { all } from "../../../backend/routes/recommendedDr";
import "./Skip.css";

const Skip = ({ isLogged, token, searchDoctor, role, setDoctorId }) => {
  const navigate = useNavigate();
  const [allDoctor, setAllDoctor] = useState("");
  const [noResult, setNoResult] = useState("");
  const [comment, setComment] = useState("");
  //  console.log(localStorage.getItem("Token"));

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
    // try{
    //   const result = await axios.get(`http://localhost:5000/doctors/${id}`)
    //   console.log(result.data.result);
    //   console.log(result.data.result[0]._id);
    //   setDoctorId(result.data.result[0]._id)
    //   navigate(`/doctor/${id}`)

    // }
    // catch(error){console.log(error.response);}
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
                      .includes(searchDoctor.toLowerCase())||
                      doctorInformation.address
                        .toLowerCase()
                        .includes(searchDoctor.toLowerCase())
                  ) {
                    return doctorInformation;
                  }
                })
                .map((element, index) => (

                  <div key={index} className="doctor"  onClick={() => {
                    getDoctorById(element._id);
                  }}>
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
                   
                      <img id="imageDoctor" src={element.image}
                      ></img>
<h2 id="nameDoctor"> {element.firstName} {element.lastName} </h2>
<p id="specializedDr">{element.specialized}</p>
<p id="specializedDr">{element.address}</p>

                    </div>
                   
                    
                     
                     
                      {/* <button id="buttonOpen"
                        onClick={() => {
                          getDoctorById(element._id);
                        }}
                      >
                        open
                      </button> */}
                   
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

// return (
//   <>
//     {localStorage.getItem("Token") ? (
//       <div className="skipAllDoctors">
//         <div>
//           {allDoctor ? (
//             allDoctor
//               .filter((doctorInformation) => {
//                 if (searchDoctor == "") {
//                   return doctorInformation;
//                 } else if (
//                   doctorInformation.firstName
//                     .toLowerCase()
//                     .includes(searchDoctor.toLowerCase()) ||
//                   doctorInformation.lastName
//                     .toLowerCase()
//                     .includes(searchDoctor.toLowerCase()) ||
//                   doctorInformation.specialized
//                     .toLowerCase()
//                     .includes(searchDoctor.toLowerCase())
//                 ) {
//                   return doctorInformation;
//                 }
//               })
//               .map((element, index) => (
//                 <div key={index} className="doctor">
//                   {role == "ADMIN" ? (
//                     <button
//                       id="deleteButton"
//                       onClick={() => {
//                         deleteDoctor(element._id);
//                       }}
//                     >
//                       X
//                     </button>
//                   ) : (
//                     <></>
//                   )}
//                   <div>
//                     {" "}
//                     <img id="imageDoctor" src={element.image}></img>
//                   </div>
//                   <div>
//                     {" "}
//                     <p>specialized:{element.specialized}</p>
//                     <button
//                       onClick={() => {
//                         getDoctorById(element._id);
//                       }}
//                     >
//                       open
//                     </button>
//                   </div>
//                 </div>
//               ))
//           ) : (
//             <div>{noResult}</div>
//           )}
//         </div>
//       </div>
//     ) : (
//       <>
//         <br></br>
//         <div className="skipAllDoctors">
//           <div>
//             {allDoctor ? (
//               allDoctor
//                 .filter((doctorInformation) => {
//                   if (searchDoctor == "") {
//                     return doctorInformation;
//                   } else if (
//                     doctorInformation.firstName
//                       .toLowerCase()
//                       .includes(searchDoctor.toLowerCase()) ||
//                     doctorInformation.lastName
//                       .toLowerCase()
//                       .includes(searchDoctor.toLowerCase()) ||
//                     doctorInformation.specialized
//                       .toLowerCase()
//                       .includes(searchDoctor.toLowerCase())
//                   ) {
//                     return doctorInformation;
//                   }
//                 })
//                 .map((element, index) => (
//                   <div key={index} className="doctor">
//                     <div>
//                       {" "}
//                       <img id="imageDoctor" src={element.image}></img>
//                     </div>
//                     <div>
//                       {" "}
//                       <p>specialized:{element.specialized}</p>
//                       <button
//                         onClick={() => {
//                           getDoctorById(element._id);
//                         }}
//                       >
//                         open
//                       </button>
//                     </div>
//                   </div>
//                 ))
//             ) : (
//               <div>{noResult}</div>
//             )}
//           </div>
//         </div>
//       </>
//     )}
//   </>
// );
// --------
// <>
// {
//   <div className="skipAllDoctors">
//     <h1 className="titleTheDoctors">الأطباء</h1>
//     <div className="allDoctor">
//       {allDoctor ? (
//         allDoctor
//           .filter((doctorInformation) => {
//             if (searchDoctor == "") {
//               return doctorInformation;
//             } else if (
//               doctorInformation.firstName
//                 .toLowerCase()
//                 .includes(searchDoctor.toLowerCase()) ||
//               doctorInformation.lastName
//                 .toLowerCase()
//                 .includes(searchDoctor.toLowerCase()) ||
//               doctorInformation.specialized
//                 .toLowerCase()
//                 .includes(searchDoctor.toLowerCase())
//             ) {
//               return doctorInformation;
//             }
//           })
//           .map((element, index) => (
//             <div key={index} className="doctor">
//               {role == "ADMIN" ||
//               localStorage.getItem("Role") == "ADMIN" ? (
//                 <button
//                   id="deleteButton"
//                   onClick={() => {
//                     deleteDoctor(element._id);
//                   }}
//                 >
//                   X
//                 </button>
//               ) : (
//                 <></>
//               )}
//               <div className="containerImage">
//                 {" "}
//                 <img id="imageDoctor" src={element.image}></img>
//               </div>
//               <div className="containerPrg">
//                 {" "}
//                 <p>{element.firstName} {element.lastName}</p>
//                 <p>specialized:{element.specialized}</p>
//                 <button id="butOpen"
//                   onClick={() => {
//                     getDoctorById(element._id);
//                   }}
//                 >
//                   open
//                 </button>
//               </div>
//             </div>
//           ))
//       ) : (
//         <div>{noResult}</div>
//       )}
//     </div>
//   </div>
// }
// </>
// );
// };