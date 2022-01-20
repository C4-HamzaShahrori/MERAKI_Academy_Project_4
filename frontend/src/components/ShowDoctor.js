import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

const ShowDoctor = ({ doctorId, token }) => {
     localStorage.getItem("Token")
//   console.log(doctorId);
  const { id } = useParams();
//   console.log(id);
  const navigate = useNavigate();
  const [doctorDetails, setDoctorDetails] = useState("");
  const [comment, setComment] = useState("");

  const getDoctorById = async () => {
    try {
      const result = await axios.get(`http://localhost:5000/doctors/${id}`);
    //   console.log(result.data.result);
      setDoctorDetails(result.data.result);
    //   console.log(doctorDetails);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDoctorById();
  }, []);
// console.log(doctorDetails);
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
      getDoctorById()
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      {doctorDetails && doctorDetails.map((details, i) => (
        <div  key={i}>
          <div>
            <img id="imageDoctor" src={details.image}></img>
          </div>
          <div>
            <p>
              specialized:{details.specialized}
              <br />
              FirstName:{details.firstName}
              <br />
              LastName:{details.lastName}
              <br />
              Address:{details.address}
              <br />
              NumberPhone:{details.numberPhone}
              <br />
            </p>
            <div>
              {details.comment ? (
                details.comment.map((comment, index) => {
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
            {localStorage.getItem("Token") ? (
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
                    addComment();
                  }}
                >
                  Add comment
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default ShowDoctor;

// {doctorDetails[0] && localStorage.getItem("Token") ? (
//     doctorDetails.map((details, i) => (
//       <div>
//         <div>
//           <img id="imageDoctor" src={details.image}></img>
//         </div>
//         <div>
//           <p>
//             specialized:{details.specialized}
//             <br />
//             FirstName:{details.firstName}
//             <br />
//             LastName:{details.lastName}
//             <br />
//             Address:{details.address}
//             <br />
//             NumberPhone:{details.numberPhone}
//             <br />
//           </p>
//           <div>
//             {details.comment ? (
//               details.comment.map((comment, index) => {
//                 return (
//                   <p className="comment" key={index}>
//                     {comment.comment}
//                   </p>
//                 );
//               })
//             ) : (
//               <></>
//             )}
//           </div>

//         </div>
//       </div>
//     ))
//   ) : (
//     // <>jjjj</>
//     doctorDetails.map((details,i)=>(<div><div>
//         <img id="imageDoctor" src={details.image}></img>
//         </div><div>
//         <p>
//                             specialized:{details.specialized}
//                             <br />
//                             FirstName:{details.firstName}
//                             <br />
//                             LastName:{details.lastName}
//                             <br />
//                             Address:{details.address}
//                             <br />
//                             NumberPhone:{details.numberPhone}
//                             <br />
//                           </p>
//                           <div>
//                           {details.comment ? (
//                             details.comment.map((comment, index) => {
//                               return (
//                                 <p className="comment" key={index}>
//                                   {comment.comment}
//                                 </p>
//                               );
//                             })
//                           ) : (
//                             <></>
//                           )}

//                         </div>
//                         {
//                         <div>
//                           <textarea
//                             className="comment"
//                             placeholder="comment..."
//                             onChange={(e) => {
//                               setComment(e.target.value);
//                             }}
//                           />
//                           <button
//                             className="commentButton"
//                             onClick={() => {
//                               addComment(details._id);
//                             }}
//                           >
//                             Add comment
//                           </button>
//                         </div>
//                       }
//             </div></div>))
//   )}
