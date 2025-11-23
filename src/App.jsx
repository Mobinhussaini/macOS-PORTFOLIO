import React from "react";
import gsap from "gsap";
import { Home, Navbar, Welcome, Dock } from "#components";
import { Terminal, Safari, Resume, Finder, Text, Image, Contact, Photos } from '#windows'; 
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
         <Home /> 
         <Photos /> 
      </div>
   );
};

export default App;
