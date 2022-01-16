import React,{useState} from "react"
import axios from "axios"
import { Routes, Route, Link, Navigate } from "react-router-dom";


const Home =()=>{
return(<div className="home" >
<div className="divDefinition" >
<p id="definition">The right path to the right doctor  </p>
<Link to="/signUp"><button id="signUp" >Sign up</button></Link>
<Link to="/signIn"><button id="signIn" >Sign in</button></Link>
<Link to="/Skip"><button id="Skip" >Skip</button></Link>
</div>
</div>)

}


export default Home


