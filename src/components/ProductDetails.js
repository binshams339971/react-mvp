import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import '../assets/css/ProductDetails.css';
import img1 from '../assets/images/maxresdefault.png';
import img2 from '../assets/images/primary-play.svg';
import icon1 from '../assets/images/love.svg';
import icon2 from '../assets/images/share.svg';
import icon3 from '../assets/images/comment.svg';
import { Link, useParams, useNavigate } from "react-router-dom";
import productService from '../services/ProductService.js';
import fileService from '../services/FileService.js';
import userService from '../services/UserService.js';
import CircularProgress from '@mui/material/CircularProgress';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
export default function ProductDetails() {
    let id = useParams();
    let [loading, setLoading] = useState(false);
    let [prod, setProd] = useState();
    let [video, setVideo] = useState();
    useEffect(() => {
        productService.getProductById(id.pId).then((product) => {
            if (product.status == 'success') {
                setProd(product.data);
                fileService.getVideoStreamingURL(product.data.video_src).then((vid) => {
                    if (vid.status == 'success') {
                        setVideo(vid.url);
                    }
                });
            } else {

            }

        }).catch((error) => {
            console.log(error);
        });
    }, []);
    const [inputField, setInputField] = useState({
        name: '',
        email: '',
        phone: ''
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
        userService.insertUser({ name: inputField.name, email: inputField.email, phone_number: inputField.phone }).then((res) => {
            if (res.status == 'success') {
                console.log(res.data);
                setInputField({ name: '', email: '', phone: '' });
                setLoading(false);
                document.getElementById("exampleModalCenter").classList.remove("show", "d-block");
                document.querySelectorAll(".modal-backdrop")
                    .forEach(el => el.classList.remove("modal-backdrop"));
                toast.success('Submitted successfuly!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else {
                setLoading(false);
                toast.error('Submission failed!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }).catch((err) => {
            setLoading(false);
            toast.error('Submission failed!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        })
    }
    return (
        <div className='container' id="content">
            <div className='d-flex justify-content-between'>
                <Link to="/">
                    <span className="material-icons-outlined" style={{ color: "#1C4A45", fontWeight: "bold" }}>
                        keyboard_backspace
                    </span>
                </Link>
                <h3 className='' style={{ color: "#4A4A4A", fontSize: "36px" }}>{prod?.name}</h3>
                <h3 className=''></h3>
            </div>

            <div className='d-flex justify-content-center mb-4 mt-md-3 mt-0'>
                <ReactPlayer controls url={video} playing={false} />
            </div>

            <div className="d-flex mx-5">
                <h3 className='' style={{ color: "#4A4A4A", fontSize: "28px" }}>{prod?.sub_info}</h3>
                <div className="ml-auto my-auto mr-4">
                    <a href="#" data-toggle="modal" data-target="#exampleModalCenter">
                        <span className="material-icons-outlined mx-2" style={{ fontSize: "40px", color: "#1C4A45" }}>
                            favorite_border
                        </span>
                    </a>
                    <a href="#" data-toggle="modal" data-target="#submitModal">
                        <span className="material-icons-outlined mx-2" style={{ fontSize: "40px", color: "#1C4A45" }}>
                            share
                        </span>
                    </a>
                    <a href="#">
                        <span className="material-icons-outlined mx-2" style={{ fontSize: "40px", color: "#1C4A45" }}>
                            chat_bubble_outline
                        </span>
                    </a>
                </div>
            </div>

            {/* Modal */}
            <div className="modal fade" id="submitModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <h3 className="text-center mt-5">Share this on</h3>
                            <div className="d-flex justify-content-center mt-4 socials">
                                <a href="">
                                    <i className="fa-brands fa-facebook-f" style={{ fontSize: "30px", margin: "10px 15px", color: "#053fa3" }}></i><p className="fb">Facebook</p>
                                </a>
                                <a href="">
                                    <i className="fa-brands fa-twitter" style={{ fontSize: "30px", margin: "10px 10px" }}></i><p className="twt">Twitter</p>
                                </a>
                                <a href="">
                                    <i className="fa-brands fa-facebook-messenger" style={{ fontSize: "30px", margin: "10px 9.2px" }}></i><p className="mnsg">Messenger</p>
                                </a>
                                <a href="">
                                    <span className="material-icons-outlined mx-2" style={{ fontSize: "30px", margin: "10px 0 10px 10px", color: "#000000" }}>
                                        chat
                                    </span><p className="sms">SMS</p>

                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <h3 className="text-center mt-4">Submit your info</h3>
                            <div className="mt-2 text-center infos">
                                <input type="text" name="name" onChange={inputsHandler} value={inputField.name} placeholder="Your name" style={{ margin: "5px 0", border: "none", background: "#E5E5E5" }}></input><br />

                                <input type="text" name="email" onChange={inputsHandler} value={inputField.email} placeholder="youremail@email.com" style={{ margin: "5px 0", border: "none", background: "#E5E5E5" }}></input><br />

                                <input type="text" name="phone" onChange={inputsHandler} value={inputField.phone} placeholder="Your Phone" style={{ margin: "5px 0", border: "none", background: "#E5E5E5" }}></input><br />

                                <button onClick={submitButton} className="mt-2" style={{ background: "#1C4A45", color: "white", padding: "0 20px" }}>
                                    Submit
                                    {loading && <CircularProgress size={12} style={{ 'color': 'yellow' }} className='ml-3' />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container notice0 mt-4">
                <div className="notice-section">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title-notice">
                                <h3>Additional Info</h3>
                            </div>
                            {/* Every row */}
                            <div className="row-content py-3">
                                <div className="bg-white row1 d-flex">
                                    <div className="align-self-center">
                                        <img src={img1} className="card-img" />
                                        <img src={img2} className="play-icon1" />
                                    </div>
                                    <div className="title1 my-auto">
                                        <a href="">
                                            <h5>ACER ASPIRE 4</h5>
                                            <p>Tap to Explore</p>
                                        </a>
                                    </div>
                                    <div className="ml-auto my-auto mr-4">
                                        <img src={icon1} className="m-2" style={{ height: "25px" }} />
                                        <img src={icon2} className="m-2" style={{ height: "25px" }} />
                                        <img src={icon3} className="m-2" style={{ height: "25px" }} />
                                    </div>
                                </div>
                            </div>
                            {/* Every row */}
                            <div className="row-content py-3">
                                <div className="bg-white row1 d-flex">
                                    <div className="align-self-center">
                                        <img src={img1} className="card-img" />
                                        <img src={img2} className="play-icon1" />
                                    </div>
                                    <div className="title1 my-auto">
                                        <a href="">
                                            <h5>ACER ASPIRE 4</h5>
                                            <p>Tap to Explore</p>
                                        </a>
                                    </div>
                                    <div className="ml-auto my-auto mr-4">
                                        <img src={icon1} className="m-2" style={{ height: "25px" }} />
                                        <img src={icon2} className="m-2" style={{ height: "25px" }} />
                                        <img src={icon3} className="m-2" style={{ height: "25px" }} />
                                    </div>
                                </div>
                            </div>
                            {/* Every row */}
                            <div className="row-content py-3">
                                <div className="bg-white row1 d-flex">
                                    <div className="align-self-center">
                                        <img src={img1} className="card-img" />
                                        <img src={img2} className="play-icon1" />
                                    </div>
                                    <div className="title1 my-auto">
                                        <a href="">
                                            <h5>ACER ASPIRE 4</h5>
                                            <p>Tap to Explore</p>
                                        </a>
                                    </div>
                                    <div className="ml-auto my-auto mr-4">
                                        <img src={icon1} className="m-2" style={{ height: "25px" }} />
                                        <img src={icon2} className="m-2" style={{ height: "25px" }} />
                                        <img src={icon3} className="m-2" style={{ height: "25px" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
