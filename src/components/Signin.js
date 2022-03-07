import '../assets/css/Signin.css';
import { Link, useNavigate } from "react-router-dom";
import art from '../assets/images/art.png'
import logo2 from '../assets/images/logo2.png'
import { useEffect, useState } from 'react';
import authService from '../services/AuthService.js';
import { isLoggedIn } from '../helpers/authHelper';
function Signin() {
    let navigate = useNavigate();
    useEffect(() => {
        if (isLoggedIn()) {
            navigate('/admins/dashboard');
        }
    })
    const [inputField, setInputField] = useState({
        username: '',
        password: ''
    })
    const inputsHandler = (e) => {
        const { name, value } = e.target;
        setInputField((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    const submitButton = () => {
        authService.login({ username: inputField.username, password: inputField.password }).then((res) => {
            if (res.status === 'success') {
                // alert("Login");
                //need to show login successfull message
                navigate("/admins/dashboard");
            } else {
                //need to show failed message
                alert("Failed");
            }
        }).catch((error) => {
            alert(error);
        })
    }
    return (
        <div className="container" id="content">
            <div className="row">
                <div className="col-md-6 col-12">
                    <div className='d-flex justify-content-between'>
                        <Link to="/">
                            <span className="material-icons-outlined" style={{ color: "#1C4A45", fontWeight: "bold" }}>
                                keyboard_backspace
                            </span>
                        </Link>
                        <h5 className='' style={{ color: "#1C4A45", fontSize: "26px" }}>WELLCOME BACK!</h5>
                        <h3 className=''></h3>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <Link to="/">
                        </Link>
                        <div className='signin d-block'>
                            <p>Username</p>
                            <input type="text" id="ip2" name="username" onChange={inputsHandler} value={inputField.username} />
                            <p>Password</p>
                            <input type="password" id="ip3" name="password" onChange={inputsHandler} value={inputField.password} />
                            <div className='d-flex justify-content-between'>
                                <div className="form-group">
                                    <input type="checkbox" id="check" />
                                    <label htmlFor="check">Remember me</label>
                                </div>
                                <a href="#" className='forgot'>Forgot Password?</a>
                            </div>
                            <button onClick={submitButton} className="btn0 btn--action" >Sign in</button>
                        </div>
                        <h3 className=''></h3>
                    </div>

                </div>
                <div className="col-md-6 col-12">
                    <div className='text-center'>
                        <img src={art} height="60%" width="60%" /><br />
                        <img src={logo2} height="20%" width="20%" />
                        <p className='title101'>Video Based Ecommerce</p>
                        <p className='title102'>Not just static photos, products videos!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin;