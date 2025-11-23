import React from "react";
import gsap from "gsap";
import { Navbar, Welcome, Dock } from "#components";
import { Terminal, Safari, Resume, Finder, Text, Image, Contact } from '#windows'; 
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const App = () => {
   return (
      <div>
         <Navbar />
         <Welcome />
         <Dock />
         <Terminal />
         <Safari />
         <Resume />  
         <Finder /> 
         <Text /> 
         <Image /> 
         <Contact /> 
      </div>
   );
};

export default App;
