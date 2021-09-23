import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Navbar(){

    const [currentPage, setCurrentPage] = useState("home");
    const handleChange = (page) => setCurrentPage(page);

    return(
        <nav>
            <div className= "nav-wrapper blue-grey darken-4">
                <Link to="/">
                    <div className= "brand-logo flow-text">Destiny Timeline</div>
                </Link>
                <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li className={currentPage === "home" ? "active" : ""}>
                        <Link to="/" onClick={() => handleChange("home")}> Home </Link>
                    </li>
                    <li className={currentPage === "quiz" ? "active" : ""}>
                        <Link to="/quiz" onClick={() => handleChange("quiz")}> Quiz </Link>
                    </li>
                    <li className={currentPage === "timeline" ? "active" : ""}>
                        <Link to="/timeline" onClick={() => handleChange("timeline")}> Timeline </Link>
                    </li>
                    <li className={currentPage === "about" ? "active" : ""}>
                        <Link to="/about" onClick={() => handleChange("about")}> About Us </Link>
                    </li>
                </ul>
                <ul id="mobile-demo" className="sidenav">
                    <li className={currentPage === "home" ? "active" : ""}>
                        <Link to="/" onClick={() => handleChange("home")}> Home </Link>
                    </li>
                    <li className={currentPage === "quiz" ? "active" : ""}>
                        <Link to="/quiz" onClick={() => handleChange("quiz")}> Quiz </Link>
                    </li>
                    <li className={currentPage === "timeline" ? "active" : ""}>
                        <Link to="/timeline" onClick={() => handleChange("timeline")}> Timeline </Link>
                    </li>
                    <li className={currentPage === "about" ? "active" : ""}>
                        <Link to="/about" onClick={() => handleChange("about")}> About Us </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )

}