import '../assets/css/Signin.css';
import { Link, useNavigate } from "react-router-dom";
import art from '../assets/images/art.png'
import logo2 from '../assets/images/logo2.png'
import { useEffect, useState } from 'react';
import authService from '../services/AuthService.js';
import { isLoggedIn } from '../helpers/authHelper';
import CircularProgress from '@mui/material/CircularProgress';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
function Signin() {
    let navigate = useNavigate();
    let [loading, setLoading] = useState(false);
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
        setLoading(true);
        authService.login({ username: inputField.username, password: inputField.password }).then((res) => {
            if (res.status === 'success') {
                setLoading(false);
                toast.success('Sign in successful!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                navigate("/admins/dashboard");

            } else {
                setLoading(false);
                toast.error('Sign in failed!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }).catch((error) => {
            setLoading(false);
            toast.error('Sign in failed!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
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
                            <button onClick={submitButton} className="btn0 btn--action" >
                                Sign in
                                {loading && <CircularProgress size={16} style={{ 'color': 'yellow' }} className='ml-3' />}
                            </button>
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