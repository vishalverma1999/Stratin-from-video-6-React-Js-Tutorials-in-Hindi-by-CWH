import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

function App() {
  {/* HUM chahte ki hamari poori react website ki state ka control App.js se ho....aur iskika hum example dekhenge by enabling and disabling dark mode from App.js */ }
  const [mode, setmode] = useState("light");

  let toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <>
      <Navbar title="Textutils" aboutText="About Text" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar/>      */}

      <div className="container my-3 ">

        <TextForm heading="Enter the text below to analyze" mode={mode} />
        {/* <About/> */}
      </div>

    </>


  );
}

export default App;
