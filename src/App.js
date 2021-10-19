import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  {/* HUM chahte ki hamari poori react website ki state ka control App.js se ho....aur iskika hum example dekhenge by enabling and disabling dark mode from App.js */ }
  const [mode, setmode] = useState("light");

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-primary');
  }

  let toggleMode = (cls) => {   // cls here is short form of class, aur isme hum bootstrap ki classes laayenge like danger,success..etc 
    removeBodyClasses();   // calling the function
    console.log(cls);
    // document.body.classList.add("bg-"+cls);   // Adding bootstrap color classes to body

    if (cls === "light") {
              if (mode === "light") {
                setmode("dark");
                document.body.style.backgroundColor = "#042743";   // dekho yaha direct cls nahi likh sakte kyunki css ko nahi pata ki primary ke corresponding kaunsa color hai isliye body mein bootsrap classes ko add karo aur fir jaake backgrounds rangeen honge
                showAlert("Dark mode has been enabled", "success");
                // document.title = "TextUtils-Dark Mode";
              }
              else {
                setmode("light");
                document.body.style.backgroundColor = "white";
                showAlert("Light mode has been enabled", "success");
                // document.title = "TextUtils-Light Mode";
              }
    }
    else {
      document.body.classList.add("bg-" + cls);
    }
  }

  const [alert, setalert] = useState(null);    // alert state
  const showAlert = (message, type) => {      // type-> bootstrap ka type hai like if type is success to green color show hoga, danger-> red
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
      <Router>
        <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        {/* <Navbar/>      */}
        <Alert alert={alert} />

        <div className="container my-3 ">
          <Switch>
            <Route exact path="/about">      {/*use exact to Avoid confusion in situations like componenet1 --> /about and componenet2 --> /about/home*/}
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <TextForm heading="Enter the text below to analyze" mode={mode} showAlert={showAlert} />
            </Route>
          </Switch>
        </div>

      </Router>
    </>


  );
}

export default App;
