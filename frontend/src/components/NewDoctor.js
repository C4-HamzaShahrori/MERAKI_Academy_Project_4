import axios from "axios";
import React, { useState, useEffect } from "react";

import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import Model  from "react-modal";
Model.setAppElement('#root')
const NewDoctor = ({setModelNewDoctor,modelNewDoctor}) => {
  const navigate=useNavigate()
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [specialized, setSpecialized] = useState("");
  const [price, setPrice] = useState("");
  const [numberPhone, setNumberPhone] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  const [stateAfterAddDoctor, setStateAfterAddDoctor] = useState("");


const addDoctor=async()=>{
    try{
        const result= await axios.post(`http://localhost:5000/doctors`,{firstName:firstName,lastName:lastName,age:age,specialized:specialized,numberPhone:numberPhone,address:address,price:price,image:image})

        // getAllDoctors(); 
    console.log(result.data)
    setStateAfterAddDoctor(result.data.message)
  navigate("/AllDoctor")
 }
    catch(error){ console.log(error.response)
      setStateAfterAddDoctor(error.response.data.message)
    }
}
return(<>
<div>
{/* <Model isOpen={modelNewDoctor}  onRequestClose={()=>{setModelNewDoctor(false)
   navigate("/AllDoctor")}}> */}
    <h2>Add Doctor:</h2>
    <input  onChange={(e) => {
          setFirstName(e.target.value);
        }}type="text" placeholder="firstName"/>
        <br/>
    <input  onChange={(e) => {
          setLastName(e.target.value);
        }}type="text" placeholder="lastName"/>
          <br/>
    <input  onChange={(e) => {
          setAge(e.target.value);
        }}type="text" placeholder="age"/>
          <br/>
    <input  onChange={(e) => {
          setSpecialized(e.target.value);
        }} type="text" placeholder="specialized"/>
          <br/>
          <input  onChange={(e) => {
          setPrice(e.target.value);
        }}type="text" placeholder="price"/>
          <br/>
    <input  onChange={(e) => {
          setNumberPhone(e.target.value);
        }}type="text" placeholder="numberPhone"/>
          <br/>
    <input  onChange={(e) => {
          setAddress(e.target.value);
        }}type="text" placeholder="address"/>
          <br/>
    <input  onChange={(e) => {
          setImage(e.target.value);
        }}type="text" placeholder="image"/>
          <br/>
<button onClick={addDoctor}>Add</button>
<div>{stateAfterAddDoctor}</div>
{/* </Model> */}

</div>
</>)
};


export default NewDoctor
