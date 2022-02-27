import React, { useState } from "react";
import { NavLink } from "react-router-dom"
import '../assets/css/Header.css';
import menuIcon from '../assets/images/menu-icon.png'
import logo from '../assets/images/logo.png'
import Sidebar from "./Sidebar.js";
import { motion } from "framer-motion";
function Header() {
    const [show, setShow] = useState();


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
                                <NavLink to="/information" className='d-flex text-white' style={{ textDecoration: "none" }}>
                                    <span className="material-icons-outlined mr-2">
                                        info
                                    </span>
                                    <p>Information</p>
                                </NavLink>
                            </div>
                            <div className="col-2 d-md-block d-none" style={{ marginTop: "40px" }}>
                                <NavLink to="/feedback" className='d-flex text-white' style={{ textDecoration: "none" }}>
                                    <span className="material-icons-outlined mr-2">
                                        chat
                                    </span>
                                    <p>Feedback</p>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-top d-flex justify-content-center">
                    <NavLink to="/"><img className="logo-img mx-auto my-2" src={logo} /></NavLink>
                </div>
            </div>
            {show == true ? <Sidebar x={[-300, 0]} /> : (show == false ? <Sidebar x={[0, -300]} /> : "")}
        </nav>
    );
}

export default Header;