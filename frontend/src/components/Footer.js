import axios from "axios";
import React, { useState, useEffect } from "react";

import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";



const Footer=()=>{
    return(<>
    <footer >
        <div className="containerFooter">
            <div className="infFooter">
                <img className="logoFooter" src="../image/logo1.png"/>
                <p className="prgFooter">FINDOCTOR</p>
            </div>
            <div className="infFooter"></div>
            <div className="infFooter"></div>
            <div className="infFooter"></div>
        </div>
    </footer>
    
    </>)
}


export default Footer;