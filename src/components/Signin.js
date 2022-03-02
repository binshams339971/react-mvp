import '../assets/css/Signin.css';
import { Link } from "react-router-dom";
import art from '../assets/images/art.png'
import logo2 from '../assets/images/logo2.png'
function Signin() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-12">
                    <div className='d-flex justify-content-between'>
                        <Link to="/">
                            <span class="material-icons-outlined" style={{ color: "#1C4A45", fontWeight: "bold" }}>
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
                            <input type="text" id="ip2" />
                            <p>Password</p>
                            <input type="password" id="ip2" />
                            <div className='d-flex justify-content-between'>
                                <div class="form-group">
                                    <input type="checkbox" id="html" />
                                    <label for="html">Remember me</label>
                                </div>
                                <a href="#" className='forgot'>Forgot Password?</a>
                            </div>
                            <Link to="/admin/dashboard" class="btn0 btn--action">Sign in</Link>
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