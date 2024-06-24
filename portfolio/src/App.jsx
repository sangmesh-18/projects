import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/services/Services";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


const App=()=>{
  return(
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
      

    </div>
  )

}
export default App