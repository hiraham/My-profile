import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Hero from "./components/Hero";

import About from "./components/About";

import Contact from "./components/Contact";

import ProjectCard from "./components/ProjectCard";
import Home from "./components/Home";
import Footer from "./components/Footer";


export default function App () {
  return (
      <div className="bg-gradient-to-r from-black  ">
      <Header/>
      <Hero/>
      <Home/>
      <Contact/>
      <About/>
      <ProjectCard/>
      <Footer/>

        
        
      
      </div>
  );
}

   
