// by typing rfc will give us react function based component
import React from "react";
// proptypes ko import karne ka syntax
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (

        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>   {/* used {} to write js and then using backticks because we want to use it as template literal with variables */}
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    {props.title}     {/* property passed  */}
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                {props.aboutText}
                            </Link>
                        </li>
                    </ul>
                     <div className="d-flex">
                        {/* onClick={props.toggleMode('primary')} AAP AISE direct nahi kar sakte kyunki onClick ko ek function chaiye hota hai naaki function call...to app function dene ke liye just function ka naam likhdo without () and fir us function ko bahar as an arrow function banado jaise ki humne saari buttons mein kiya hai.....ya fir aap directly yahi ek arrow function banalo(jaise ki neeche kiya huya hai).....IMPORTANT jaise hi aapne ek baar function de diya onClick ko fir aap kuch bhi karo chahe to uske andar se function call karlo */}
                         <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height:"30px", width:"30px", cursor:"pointer"}}></div>
                         <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height:"30px", width:"30px", cursor:"pointer"}}></div>
                         <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height:"30px", width:"30px", cursor:"pointer"}}></div>
                         <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height:"30px", width:"30px", cursor:"pointer"}}></div>
                     </div>
                    <div className={`form-check form-switch text-${props.mode=== "light"? 'dark': 'light'}`}>  {/*text-light is bootstrap class */}
                        <input className="form-check-input" onClick={()=>{props.toggleMode('light')}} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark mode</label>
                    </div>
                </div>
            </div>
        </nav>

    );
}



// This is beforehand check to ensure ke aapko jo paas karna tha wahi kiya hai....aisa na ho jaye ki paas string karni thi aur kar number diya
Navbar.propTypes = {
    title: PropTypes.string.isRequired,     // isRequired means compulsory hai title ko pass agr nahi karoge to error aayega
    aboutText: PropTypes.string.isRequired
};

// Default props-> agar koi prop pass na kiya ho to default wala use ho jayega 
// Navbar.defaultProps = {
//     title: "Set title Here",
//     aboutText: "About text here"
// };

