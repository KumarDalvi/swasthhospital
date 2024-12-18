import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {

    return (
        <>
            <div className="Header">
                <div className="container-fluid bg-primary">
                    <div className="container">
                        <div className="row pt-2 pb-2 text-white fw-medium">
                            <div className="col-md-4">
                                <i className="fa-regular fa-envelope"></i> swasthyahospitalcashless@gmail.com
                            </div>
                            <div className="col-md-3">
                                <i className="fa-solid fa-phone"></i> Call: 0241 243 0530
                            </div>
                            <div className="col-md-2">
                                <i className="fa-regular fa-clock"></i> Emergency 24 x 7
                            </div>
                            <div className="col-md-3">
                                <span>  Marathi  |  English </span>
                                <i className="fa-brands fa-facebook-f ms-3"></i>
                                <i className="fa-brands fa-twitter ms-3" ></i>
                                <i className="fa-brands fa-youtube ms-3"></i>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="Navbar shadow-lg">
                <div className="container-fluid ">
                    <div className="container pt-3 pb-3">
                        <div className="row">
                            <div className="col-md-3">
                                <img src="https://www.swasthyahospital.com/img/logo.png" />
                            </div>
                            <div className="col-md-9 fs-5 ">
                                <nav className="navbar navbar-expand-lg ">
                                    <div className="container-fluid">
                                        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon "></span>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                                <li className="nav-item">
                                                    <NavLink className="nav-link text-dark" aria-current="page" to="/">Home</NavLink>
                                                </li>
                                                <li className="nav-item dropdown">
                                                    <NavLink className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Departments
                                                    </NavLink>
                                                    <ul className="dropdown-menu">
                                                        <li><NavLink className="dropdown-item text-dark bg-white" to="/cardiology">Cardiology</NavLink></li>
                                                        <li><NavLink className="dropdown-item text-dark bg-white" to="/gynecology">Obstetrics & Gynaecology</NavLink></li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link text-dark" aria-current="page" to="/facility">Facilities</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link text-dark" aria-current="page" to="/doctors">Doctors</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link text-dark" aria-current="page" to="/cashless">Cashless</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link text-dark" aria-current="page" to="/contactUs">Contact Us</NavLink>
                                                </li>

                                            </ul>
                                            <button className="btn btn-primary">APPOINTMENT</button>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}