// Init
import React from "react";

// Importing Components
import Header from "../components/Header";
import Main from "../components/Main";
import Features from "../components/Features";
import Contactus from "../components/Contactus";
import Footer from "../components/Footer"

// Home Component
export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Features />
      <Contactus/>
      <Footer/>
    </div>
  );
}
