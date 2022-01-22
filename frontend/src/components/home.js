import React, { useState ,useEffect} from "react";
import axios from "axios";
import { Routes, Route, Link, Navigate } from "react-router-dom";

// console.log(localStorage.getItem("Token"));
const Home = ({setSearchDoctor,token}) => {
  const [allTips, setAllTips] = useState("");
  const [noResult, setNoResult] = useState("");
  const getAllTips = async () => {
    try {
      const result = await axios.get(`http://localhost:5000/tips`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (result.data == `No result`) {
        console.log(result.data);
        setNoResult(result.data);
      } else {
        console.log(result.data.Tips);
        // console.log(result.data.result);
        setAllTips(result.data.Tips);
      }
    } catch(error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getAllTips();
  }, []);


  return (
      <>
      <div className="container">
      
      <div  className="row"> 
      <div className="col">
  <h1 className="FindDoctor">!ابحث عن طبيب</h1>
   <input id="searchInput" type="text" placeholder="مثال.الاسم،التخصص " onChange={(e)=>{setSearchDoctor(e.target.value)}}/>
      </div>
      <div className="col">
  <div className="card card1">
  <h5 className="tips">كوفيد-19</h5>
  <p>ضَع كمامة،أنقِذ حياة غيرك</p>
  </div>
  <div className="card card2">
  <h5 className="tips">كوفيد-19</h5>
  <p>اغسِل يديك</p>
  </div>
  <div className="card card3">
  <h5 className="tips">كوفيد-19</h5>
  <p>أبقِ مسافة آمنة</p>
  </div>
  <div className="card card4">
  <h5 className="tips">كوفيد-19</h5>
  <p>ابقَ في المنزل إذا شعرت بالمرض</p>
  </div>
      </div>
      
        </div>
      </div>
    <div className="home">
      <h1 id="headerHome">!اكتشف الطبيب على الإنترنت</h1>
      <div className="containerService">
        <div className="serviceC">
          <div className="service  service1">
            <div className="main">
              <div className="findDoctor">
              <div className="divImageFindDoctor">
                  <img id="imageFindDoctor" src="../image/FD.png"/>
              </div>
                <h4 id="titleFindDoctor">اعثر على طبيب </h4>
                <p id="PrgFindDoctor">ابحث عن طبيب الاقرب اليك </p>
              </div>
              <div className="shadowOne"></div>
              <div className="shadowTow"></div>
            </div>
          </div>
          <div className=" service service2"> <div className="main">
              <div className="findDoctor">
              <div className="divImageFindDoctor">
                  <img id="imageFindDoctor" src="../image/VP.png"/>
              </div>
                <h4 id="titleFindDoctor">عرض الصفحة الشخصية </h4>
                <p id="PrgFindDoctor">شاهد الملف الشخصي للطبيب </p>
              </div>
              <div className="shadowOne"></div>
              <div className="shadowTow"></div>
            
            </div></div>
          <div className="service service3">
          <div className="main">
              <div className="findDoctor">
              <div className="divImageFindDoctor">
                  <img id="imageFindDoctor" src="../image/Price.png"/>
              </div>
                <h4 id="titleFindDoctor">اكتشف الاسعار </h4>
                <p id="PrgFindDoctor"> كشفية الطبيب ومقارنة السعر</p>
               
              </div>
              <div className="shadowOne"></div>
              <div className="shadowTow"></div>
            </div>
          
          </div>
          
        </div>
        
      </div>

    <a href="/AllDoctor">  <button  id="Skip" >استكشف</button></a>
     
    </div>
<>
<div className="bodyTips">

  <h1 className="titleTips">نصائح</h1>
  <div className="tipsContainer">
  <div className="boxImage active"> <img src="../image/tips.jpg"/></div>
  {allTips ? (allTips.map((tip,i)=>(

<div  key={i} className="boxImage"><img src={tip.image}/></div>





))):(<div>{noResult}</div>)}
  
  
  </div></div></>
    
  
     
    
    

    </>
    
  );
  
};

export default Home;


 {/* <div className="findDoctor">
        <img id="imageFindDoctor" src="../image/FD.png" />
      </div>

      <div className="viewProfile">
        <img id="imageViewProfile" src="../image/VP.png" />
        <h4 id="headerViewProfile">عرض الصفحة الشخصية </h4>
      </div>
      <div className="findPrices">
        <img id="imageFindPrices" src="../image/price.png" />
        <h4 id="headerFindPrices">اكتشف الاسعار</h4>
      </div> */}
      {
        /* <Link to="/signUp"><button id="signUp" >Sign up</button></Link>
    <Link to="/signIn"><button id="signIn" >Sign in</button></Link>
    <Link to="/AllDoctor"><button id="Skip" >Skip</button></Link> */
      }