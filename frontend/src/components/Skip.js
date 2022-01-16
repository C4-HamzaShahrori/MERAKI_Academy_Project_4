import React,{useState,useEffect} from "react"
import axios from "axios"
import { Routes, Route, Link, Navigate } from "react-router-dom";
// import { all } from "../../../backend/routes/recommendedDr";



const Skip=({isLogged})=>{
const[allDoctor,setAllDoctor]=useState("")
const[noResult,setNoResult]=useState("")
useEffect(()=>{
    getAllDoctors()
},[])
const getAllDoctors=()=>{
    axios.get(`http://localhost:5000/doctors`).then((result)=>
    {;
        if (result.data==`No result`){
            
        setNoResult(result.data)
    }else{
       
        setAllDoctor(result.data.result)
       
    }
}).catch((err)=>{
    
})
}

return(<>
{isLogged?(  <div className="skipAllDoctors">
       <div>{allDoctor ?(allDoctor.map((element,index)=>(<div key={index}>
        <img id="imageDoctor" src={element.image}></img><p>
           specialized:{element.specialized}
        <br/>
           FirstName:{element.firstName}
           <br/>
           LastName:{element.lastName}
           <br/>
           Address:{element.address}
           <br/>
           NumberPhone:{element.numberPhone}
           <br/>
         comment:{element.comment}
       </p>
     </div>))):(<div>{noResult}</div>)}</div> 
    </div>):(  <div className="skipAllDoctors">
       <div>{allDoctor ?(allDoctor.map((element,index)=>(<div key={index}>
           <img id="imageDoctor" src={element.image}></img>
           <p>
           specialized:{element.specialized}
        <br/>
           FirstName:{element.firstName}
           <br/>
           LastName:{element.lastName}
           <br/>
           Address:{element.address}
           <br/>
           NumberPhone:{element.numberPhone}
           <br/>
       </p>
     </div>))):(<div>{noResult}</div>)}</div> 
    </div>)}
  
</>
)

}

export default Skip