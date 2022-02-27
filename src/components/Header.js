import React, { useState } from "react";
import { Routes, Route, NavLink as Link } from "react-router-dom"
import '../assets/css/Header.css';
import menuIcon from '../assets/images/menu-icon.png'
import logo from '../assets/images/logo.png'
import Sidebar from "./Sidebar.js";
function Header() {
    const [show, setShow] = useState(false);

    return (
        <nav className='nav'>
            <div className="header">
                <div className="header-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-1">
                                <a onClick={() => setShow(!show)} id="menu"><img className="mt-5" src={menuIcon} /></a>
                            </div>
                            <div className="col-3">
                                {/* <!-- <img className="" src="search-box.png" style="height: 50%; margin-top: 32px;" /> --> */}
                            </div>
                            <div className="col-4"></div>
                            <div className="col-2 d-md-block d-none" style={{ marginTop: "40px" }}>
                                <a href='/information' className='d-flex text-white' style={{ textDecoration: "none" }}>
                                    <span className="material-icons-outlined mr-2">
                                        info
                                    </span>
                                    <p>Information</p>
                                </a>
                            </div>
                            <div className="col-2 d-md-block d-none" style={{ marginTop: "40px" }}>
                                <a href="/feedback" className='d-flex text-white' style={{ textDecoration: "none" }}>
                                    <span className="material-icons-outlined mr-2">
                                        chat
                                    </span>
                                    <p>Feedback</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-top d-flex justify-content-center">
                    <a href="/"><img className="logo-img mx-auto my-2" src={logo} /></a>
                </div>
            </div>
        </nav>
    );
}

export default Header;