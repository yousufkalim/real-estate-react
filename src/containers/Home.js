// Init
import React from "react";

// Importing Components
import Header from "../components/Header";
import Main from "../components/Main";
import Features from "../components/Features";
import Contactus from "../components/Contactus";
import Footer from "../components/Footer"
import { useRef } from "react";

// Home Component
export default function Home() {
  const features = useRef(null);
  const contact =useRef(null);
  const main = useRef(null);

  return (
    <div className="abc">
      <Header onNavPress={(state)=>{
        console.log("---->",state)
        if(state==="Contactus"){
          contact.current.scrollIntoView({behavior:"smooth", block:"start"})
        }
        else if(state==="About"){
          main.current.scrollIntoView({behavior:"smooth", block:"start"})
        }
        else if(state==="Features"){
          features.current.scrollIntoView({behavior:"smooth", block:"start"})
        }
        
      }}/>
      <Main cRef={main}/>
      <Features cRef={features}/>
      <Contactus  cRef={contact}/>
      <Footer/>
    </div>
  );
}
