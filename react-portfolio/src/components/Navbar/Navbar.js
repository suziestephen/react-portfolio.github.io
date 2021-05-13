import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg text-light">
            <div className="container">
                <Link className="navbar-brand" to="/homepage">Suzie Stephen React Portfolio</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/About"
                            className={window.location.pathname === "/About" ? "nav-link active" : "nav-link"}
                        > About Me</Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/MyProjects"
                            className={window.location.pathname === "/MyProjects" ? "nav-link active" : "nav-link"}
                        > My Portfolio</Link>
                    </li>
                </ul>
            </div>
        </nav>

    );
}

export default Navbar;