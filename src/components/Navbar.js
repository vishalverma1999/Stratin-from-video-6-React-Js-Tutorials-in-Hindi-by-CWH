// by typing rfc will give us react function based component
import React from "react";
// proptypes ko import karne ka syntax
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        {props.title}     {/* property passed  */}
                    </a>
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
                                <a className="nav-link active" aria-current="page" href="/">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    {props.aboutText}
                                </a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </form>
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

