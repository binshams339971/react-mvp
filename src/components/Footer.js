import '../assets/css/Footer.css'
import logo2 from '../assets/images/logo2.png'
import phone from '../assets/images/phone.svg'
import email from '../assets/images/email.svg'

function Footer() {
    return (
        <>
            <div className="container-fluid footer mt-5">
                <div className="container py-4">
                    <div className="row ml-4 ml-md-0">
                        <div className="col-md-4 col-12">
                            <h3 className="contact">Contact Us</h3>
                            <h6 className="send">Send us a message</h6>
                            <input type="text" placeholder="Full Name" className="contact-input" /><br />
                            <input type="text" placeholder="Your Email" className="contact-input" /><br />
                            <input type="text" placeholder="Type your message here" className="contact-message" /><br />
                            <button type="submit" className="submit-btn">Submit</button>
                        </div>
                        <div className="col-md-1 col-12"></div>
                        <div className="col-md-2 col-12">
                            <h5 className="list-title">Quick Links</h5>
                            <ul className="links">
                                <li>Home</li>
                                <li>Categories</li>
                                <li>Information</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-12">
                            <h5 className="list-title">Quick Links</h5>
                            <ul className="links">
                                <li>Home</li>
                                <li>Categories</li>
                                <li>Information</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-12">
                            <a href="#" className="d-flex justify-content-md-end justify-content-start"><img className="bottom-logo"
                                src={logo2} /></a>

                            <p className="text-md-right text=-left bottom-text">+88012 3564789<img src={phone} className="ml-2"
                                style={{ fill: "#5F5F5F", height: "20px" }} />
                            </p>
                            <p className="text-md-right text-left bottom-text">abc@gmail.com<img src={email} className="ml-2"
                                style={{ fill: "#5F5F5F", height: "15px" }} /></p>

                            <p className="copy-right text-md-right text-left">Copyright 2021 All Rights Reserved By Eaaasy</p>
                        </div>
                    </div>
                </div>
            </div></>
    );
}

export default Footer;