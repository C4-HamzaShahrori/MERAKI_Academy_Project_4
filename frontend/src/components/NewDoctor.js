import axios from "axios";
import React, { useState, useEffect } from "react";

import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import Model from "react-modal";
Model.setAppElement("#root");
const NewDoctor = ({ setModelNewDoctor, modelNewDoctor }) => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [specialized, setSpecialized] = useState("");
  const [price, setPrice] = useState("");
  const [numberPhone, setNumberPhone] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  const [stateAfterAddDoctor, setStateAfterAddDoctor] = useState("");

  const addDoctor = async () => {
    try {
      const result = await axios.post(`http://localhost:5000/doctors`, {
        firstName: firstName,
        lastName: lastName,
        age: age,
        specialized: specialized,
        numberPhone: numberPhone,
        address: address,
        price: price,
        image: image,
      });

      
      setStateAfterAddDoctor(result.data.message);
      navigate("/AllDoctor");
    } catch (error) {
      console.log(error.response);
      setStateAfterAddDoctor(error.response.data.message);
    }
  };
  return (
    <>
      <div className="containerNewDoctor">
        <div className="formAddDoctor">
          <div className="sameLine">
            <div className="inputGroup">
              <input
                id="lastName"
                required
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                type="text"
                placeholder="الاسم الاخير"
              />
              <label for="lastName">الاسم الاخير</label>
            </div>
            <div className="inputGroup">
              <input
                id="firstName"
                required
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                type="text"
                placeholder="الاسم الاول"
              />
              <label for="firstName">الاسم الاول</label>
            </div>{" "}
          </div>

          <div className="inputGroup">
            <input
              id="specialized"
              required
              onChange={(e) => {
                setSpecialized(e.target.value);
              }}
              type="text"
              placeholder="الاختصاص"
            />
            <label for="specialized">الاختصاص</label>
          </div>

          <div className="inputGroup">
            <input
              id="price"
              required
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              type="text"
              placeholder="الكشفية"
            />
            <label for="price">الكشفية</label>
          </div>

          <div className="inputGroup">
            <input
              id="numberPhone"
              required
              onChange={(e) => {
                setNumberPhone(e.target.value);
              }}
              type="text"
              placeholder="رقم التواصل"
            />
            <label for="numberPhone">رقم التواصل</label>
          </div>
          <div className="inputGroup">
            <input
              id="imageToDoctor"
              required
              onChange={(e) => {
                setImage(e.target.value);
              }}
              type="text"
              placeholder="اضافة صورة "
            />
            <label for="imageToDoctor">اضافة صورة</label>
          </div>

          <div className="inputGroup">
            <textarea
              id="address"
              rows="8"
              required
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              type="text"
              placeholder="العنوان"
            />
            <label for="address">العنوان</label>
          </div>
          <button className="btnAddDoctor" onClick={addDoctor}>
            اضافه
          </button>
        </div>

        <div>{stateAfterAddDoctor}</div>
      </div>
    </>
  );
};

export default NewDoctor;
