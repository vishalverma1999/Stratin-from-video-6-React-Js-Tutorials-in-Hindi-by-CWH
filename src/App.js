import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react'

function App() {
  {/* HUM chahte ki hamari poori react website ki state ka control App.js se ho....aur iskika hum example dekhenge by enabling and disabling dark mode from App.js */ }
  const [mode, setmode] = useState("light");

  let toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils-Dark Mode";
      // lupur-lupur karwa rahe hai title ko, like virus lupur lupur hota hai websites mein
      let intervalID = setInterval(() => {
        document.title = "TextUtils is Amazing Mode";
      }, 2000);
      let intervalID1 = setInterval(() => {
        document.title = "Install TextUtils Now";
      }, 1500);
      // The global clearInterval() method cancels a timed, repeating action which was previously established by a call to setInterval().
      // Syntax -> clearInterval(intervalID)

      setTimeout(() => {
        clearInterval(intervalID);
        clearInterval(intervalID1);
        document.title = "TextUtils-Dark Mode";
      }, 5000);
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils-Light Mode";
    }
  }




  const [alert, setalert] = useState(null);    // alert state
  const showAlert = (message, type)=>{      // type-> bootstrap ka type hai like if type is success to green color show hoga, danger-> red
    setalert({
       msg: message,
       type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  return (
    <>
      <Navbar title="Textutils" aboutText="About Text" mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar/>      */}
      <Alert alert = {alert} />

      <div className="container my-3 ">

        <TextForm heading="Enter the text below to analyze" mode={mode} showAlert = {showAlert}/>
        {/* <About/> */}
      </div>

    </>


  );
}

export default App;
