import React, { useState } from "react";
import axios from "axios";
import { Routes, Route, Link, Navigate } from "react-router-dom";



const Header=({setSearchDoctor})=>{

return(
    <>  <div className="container">
      
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
    </div></>
)

}


export default Header;