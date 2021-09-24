import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/Navbar.css'

export default function Navbar(){

    const [currentPage, setCurrentPage] = useState("home");
    const handleChange = (page) => setCurrentPage(page);

    return(
        <>
            <ul id="dropdown1" className="dropdown-content">
                <li className={currentPage === "home" ? "active" : ""}>
                    <Link to="/" onClick={() => handleChange("home")} className="black-text"> Home </Link>
                </li>
                <li className="divider"></li>
                <li className={currentPage === "timeline" ? "active" : ""}>
                    <Link to="/timeline" onClick={() => handleChange("timeline")} className="black-text"> Timeline </Link>
                </li>
                <li className="divider"></li>
                <li className={currentPage === "about" ? "active" : ""}>
                    <Link to="/about" onClick={() => handleChange("about")} className="black-text"> About Us </Link>
                </li>
            </ul>
            <nav className="z-depth-0">
                <div className="nav-wrapper">
                    <ul className="right">
                        <li><a className="dropdown-trigger" href="#!" data-target="dropdown1"><i className="large material-icons right icon-white">menu</i></a></li>
                    </ul>
                </div>
            </nav>
        </>

        // <nav>
        //     <div className= "nav-wrapper blue-grey darken-3">
        //         <Link to="/">
        //             <div className= "brand-logo flow-text">Destiny Timeline</div>
        //         </Link>
        //         <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons right">menu</i></a>
        //         <ul id="nav-mobile" className="right hide-on-med-and-down">
        //             <li className={currentPage === "home" ? "active" : ""}>
        //                 <Link to="/" onClick={() => handleChange("home")}> Home </Link>
        //             </li>
        //             <li className={currentPage === "quiz" ? "active" : ""}>
        //                 <Link to="/quiz" onClick={() => handleChange("quiz")}> Quiz </Link>
        //             </li>
        //             <li className={currentPage === "timeline" ? "active" : ""}>
        //                 <Link to="/timeline" onClick={() => handleChange("timeline")}> Timeline </Link>
        //             </li>
        //             <li className={currentPage === "about" ? "active" : ""}>
        //                 <Link to="/about" onClick={() => handleChange("about")}> About Us </Link>
        //             </li>
        //         </ul>
        //         <ul id="mobile-demo" className="sidenav">
        //             <li className={currentPage === "home" ? "active" : ""}>
        //                 <Link to="/" onClick={() => handleChange("home")}> Home </Link>
        //             </li>
        //             <li className={currentPage === "quiz" ? "active" : ""}>
        //                 <Link to="/quiz" onClick={() => handleChange("quiz")}> Quiz </Link>
        //             </li>
        //             <li className={currentPage === "timeline" ? "active" : ""}>
        //                 <Link to="/timeline" onClick={() => handleChange("timeline")}> Timeline </Link>
        //             </li>
        //             <li className={currentPage === "about" ? "active" : ""}>
        //                 <Link to="/about" onClick={() => handleChange("about")}> About Us </Link>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>
    )

}