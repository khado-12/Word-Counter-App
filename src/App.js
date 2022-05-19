
 import './App.css'; 
 import Header from './MyComponent/Header';
//  import Todos from "./MyComponent/Todos";
import Footer from "./MyComponent/Footer";
import AboutUs from './MyComponent/AboutUs';
import TextForm from "./MyComponent/TextForm";
import Alert from "./MyComponent/Alert";
import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Link,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      mesg: message,
      type: type

    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);



  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "		#02072F";
      showAlert("Grey mode has been enable", "success");
      document.title = "word counter app -dark mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enable", "success");
      document.title = "word counter app -light mode";
    }
  }



  // const btnColor =() =>{
  //   if(mode === 'light')
  //   {  setMode('blue');
  //   document.getElementById("p2").style.backgroundColor = "blue";

  //   }
  //   else{
  //     setMode('yellow');
  //     document.getElementById("p2").style.backgroundColor = "blue";
  //   }

  //}
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
      <Header title="Icoders" AboutText="AboutUs" toggleMode={toggleMode} mode={mode} />
      <Alert alert={alert} />
      {/* <Header/> */}
      {/* <Todos todos={todos}/> */}
      <Footer />
      <div className='container' my-3>
      <BrowserRouter>
       <Routes>
          <Route path='/' exact element={<TextForm showAlert={showAlert} heading="Enter text to analyz below" style={{ color: mode === 'dark' ? 'white' : 'black' }} mode={mode}/>}/>

          <Route path='/about' element={<AboutUs />} />

        </Routes>
        </BrowserRouter>
        
        
     
      </div>






{/* <TextForm showAlert={showAlert} heading="Enter text to analyz below" style={{ color: mode === 'dark' ? 'white' : 'black' }} mode={mode} />
<AboutUs /> */}
    </>
  );
}

export default App;
