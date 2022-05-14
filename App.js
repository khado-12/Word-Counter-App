
import './App.css';
import Header from './MyComponent/Header';
//  import Todos from "./MyComponent/Todos";
import Footer from "./MyComponent/Footer";
 //import AboutUs from './MyComponent/AboutUs';
  import TextForm from "./MyComponent/TextForm";
  import React, { useState } from 'react';
  


function App() {
    
    const [mode, setMode] = useState("white");
    const ToggleClick = (props) =>{
      if(props.mode== "white")
      {
        setMode("white");
      }
      else{
        setMode("dark");
      }
    }
  // let todos=[
  //   {
  //     sno:1,
  //     title:"Go to shop",
  //     desc:"you need to get something from the shop"
  //   },
  //   {
  //     sno:2,
  //     title:"Go to Mall",
  //     desc:"you need to get something from the shop"
  //   },
  //   {
  //     sno:3,
  //     title:"Go to Library",
  //     desc:"you need to get something from the shop"
  //   }
  // ]
 
  return (
    <>
   {/* <Header title="My todo List" AboutText="About Us" /> */}
   <Header/>
   {/* <Todos todos={todos}/> */}
   <Footer/> 
    <TextForm heading="Enter text to analyz below"/>
   {/* <AboutUs/> */}


    </>
  );
}

export default App;
