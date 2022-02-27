import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import '../assets/css/ProductDetails.css';
import img1 from '../assets/images/maxresdefault.png';
import img2 from '../assets/images/primary-play.svg';
import icon1 from '../assets/images/love.svg';
import icon2 from '../assets/images/share.svg';
import icon3 from '../assets/images/comment.svg';
import { Link, useParams } from "react-router-dom";
export default function ProductDetails() {
    // let id = useParams();
    // useEffect(() => {
    //     console.log(id);
    // }, []);
    return (
        <div className='container'>
            <div className='d-flex justify-content-between'>
                <Link to="/">
                    <span class="material-icons-outlined" style={{ color: "#1C4A45", fontWeight: "bold" }}>
                        keyboard_backspace
                    </span>
                </Link>
                <h3 className='' style={{ color: "#4A4A4A", fontSize: "36px" }}>ACER</h3>
                <h3 className=''></h3>
            </div>

            <div className='d-flex justify-content-center mb-4 mt-md-3 mt-0'>
                <ReactPlayer controls url='https://media.w3.org/2010/05/sintel/trailer_hd.mp4' playing={false} />
            </div>

            <div className="d-flex mx-5">
                <h3 className='' style={{ color: "#4A4A4A", fontSize: "28px" }}>ACER ASPIRE 3</h3>
                <div className="ml-auto my-auto mr-4">
                    <a href="#" data-toggle="modal" data-target="#exampleModalCenter">
                        <span class="material-icons-outlined mx-2" style={{ fontSize: "40px", color: "#1C4A45" }}>
                            favorite_border
                        </span>
                    </a>
                    <a href="#" data-toggle="modal" data-target="#submitModal">
                        <span class="material-icons-outlined mx-2" style={{ fontSize: "40px", color: "#1C4A45" }}>
                            share
                        </span>
                    </a>
                    <a href="#">
                        <span class="material-icons-outlined mx-2" style={{ fontSize: "40px", color: "#1C4A45" }}>
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
                                <input type="text" placeholder="Your name" style={{ margin: "5px 0", border: "none", background: "#E5E5E5" }}></input><br />
                                <input type="text" placeholder="youremail@email.com" style={{ margin: "5px 0", border: "none", background: "#E5E5E5" }}></input><br />
                                <input type="text" placeholder="Your Phone" style={{ margin: "5px 0", border: "none", background: "#E5E5E5" }}></input><br />
                                <button type="submit" className="mt-2" style={{ background: "#1C4A45", color: "white", padding: "0 20px" }}>Submit</button>
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
