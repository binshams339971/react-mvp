import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom"
import '../assets/css/Header.css';
import menuIcon from '../assets/images/menu-icon.png'
import logo from '../assets/images/logo.png'
import Sidebar from "./Sidebar.js";
import { logout } from '../helpers/authHelper';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

function Header() {
    const [show, setShow] = useState();
    const [admin, setAdmin] = useState(false);
    const y = document.getElementById("content");
    useEffect(() => {
        if (y != null) {
            if (show) {
                y.style.marginLeft = "250px";
                y.style.transition = "50s linear";
            } else {
                y.style.marginLeft = "auto";
                y.style.transition = "20s linear";
            }
            // show ? y.style.marginLeft = "250px" : y.style.marginLeft = "auto";
        }
    });

    let location = useLocation();
    let l = location.pathname;
    const [loc, setLoc] = useState(location.pathname);
    useEffect(() => {
        if (!(l == loc)) {
            setShow(false);
            setLoc(location.pathname);
        }
    });

    useEffect(() => {
        if (location.pathname.match("/admins")) {
            setAdmin(true);
        } else {
            setAdmin(false);
        }
    });

    let navigate = useNavigate();
    const signOutButton = () => {
        logout();
        toast.success('Sign out successful!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        navigate('/');
    }
    return (
        <nav className='nav'>
            <div className="header">
                <div className="header-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-2">
                                <a onClick={() => setShow(!show)} id="menu"><img className="mt-5" src={menuIcon} /></a>
                            </div>
                            <>
                                {!admin ?
                                    <div className="d-flex col-10 justify-content-end navLinks" style={{ marginTop: "40px" }}>
                                        <NavLink to="/information" className='d-flex text-white' style={{ textDecoration: "none" }}>
                                            <span className="material-icons-outlined mr-2">
                                                info
                                            </span>
                                            <p>Information</p>
                                        </NavLink>
                                        <NavLink to="/feedback" className='d-flex text-white' style={{ textDecoration: "none" }}>
                                            <span className="material-icons-outlined mr-2">
                                                chat
                                            </span>
                                            <p>Feedback</p>
                                        </NavLink>
                                    </div> :
                                    <>
                                        <div className="d-flex col-10 justify-content-end" style={{ marginTop: "30px" }}>
                                            <a onClick={signOutButton} className="signOutBtn1">Sign out</a>
                                        </div>
                                    </>
                                }
                            </>
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