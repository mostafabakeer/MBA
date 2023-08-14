import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
 
  
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "../styles/globals.css";

// import { useEffect } from "react";

import "@/styles/globals.css";

 
   
 

import Manlayout from "../components/Manlayout";
 
import { Imperial_Script } from "next/font/google";
import Aos from "aos";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);


  useEffect(() => {
    AOS.init({
         duration: 2000,
         once: false,
       })
 }, [])
  return (
 
    <Manlayout>
       
     <div className="bdy ">
     
      
          <Component {...pageProps} /> 
           
        
     </div>
    </Manlayout>
  );
}
