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
import referralService from '../services/ReferralService.js';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

toast.configure();
export default function ProductDetails() {
    let id = useParams();
    let [loading, setLoading] = useState(true);
    let [loading2, setLoading2] = useState(false);
    let [prod, setProd] = useState();
    let [video, setVideo] = useState();
    let [social, setSocial] = useState('');
    let [shareLink, setShareLink] = useState('');
    useEffect(() => {
        productService.getProductById(id.pId).then((product) => {
            if (product.status == 'success') {
                setProd(product.data);
                fileService.getVideoStreamingURL(product.data.video_src).then((vid) => {
                    if (vid.status == 'success') {
                        setVideo(vid.url);
                        setLoading(false);
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
        setLoading2(true);
        userService.insertUser({ name: inputField.name, email: inputField.email, phone_number: inputField.phone }).then((res) => {
            if (res.status == 'success') {
                referralService.insertReferral({ user_id: res?.data.id, product_id: id.pId, platform: social }).then((res) => {
                    if (res.status == 'success') {
                        console.log(res?.data.id.referral_token);
                        setInputField({ name: '', email: '', phone: '' });
                        setSocial('');
                        setLoading(false);
                        setLoading2(false);
                        document.getElementById("submitModal").classList.remove("show", "d-block");
                        document.querySelectorAll(".modal-backdrop")
                            .forEach(el => el.classList.remove("modal-backdrop"));
                        setShareLink(res?.data.id.referral_token);
                        handleClickOpen();
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

                    }
                }).catch((err) => {

                })
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

    const handleSocial = (value) => {
        setSocial(value);
    }


    const [open, setOpen] = React.useState(false);
    const [copy, setCopy] = React.useState('Copy');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(shareLink);
        setCopy('Copied')
    };

    return (
        <>
            {!loading ?
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
                            <a href="#">
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
                                    <div className="socialOptions">
                                        <h3 className="text-center mt-3">Share this on</h3>
                                        <div className="d-flex justify-content-center mt-4 socials">
                                            <button onClick={() => handleSocial('facebook')}>
                                                <i className="fa-brands fa-facebook-f" style={{ fontSize: "30px", margin: "10px 5px", color: "#4267B2" }}></i><p className="fb">Facebook</p>
                                            </button>
                                            <button onClick={() => handleSocial('twitter')}>
                                                <i className="fa-brands fa-twitter" style={{ fontSize: "30px", margin: "10px 0px", color: "#1DA1F2" }}></i><p className="twt">Twitter</p>
                                            </button>
                                            <button onClick={() => handleSocial('messenger')}>
                                                <i className="fa-brands fa-facebook-messenger" style={{ fontSize: "30px", margin: "9.5px 0px", color: "#006AFF" }}></i><p className="mnsg">Messenger</p>
                                            </button>
                                            <button onClick={() => handleSocial('sms')}>
                                                <span className="material-icons-outlined mx-2" style={{ fontSize: "28px", margin: "10px 0px", color: "#000000" }}>
                                                    chat
                                                </span><p className="sms">SMS</p>
                                            </button>
                                        </div>
                                    </div>

                                    {social &&
                                        <div className="userInfo">
                                            <hr />
                                            <h3 className="text-center mt-2" style={{ marginBottom: "0px" }}>Submit your info</h3>
                                            <p className="text-center" style={{ marginBottom: "0px" }}>For <strong>{social}</strong> share</p>
                                            <div className="mt-2 text-center infos">
                                                <input type="text" name="name" onChange={inputsHandler} value={inputField.name} placeholder="Your name" style={{ margin: "5px 0", border: "none", background: "#E5E5E5" }}></input><br />

                                                <input type="text" name="email" onChange={inputsHandler} value={inputField.email} placeholder="youremail@email.com" style={{ margin: "5px 0", border: "none", background: "#E5E5E5" }}></input><br />

                                                <input type="text" name="phone" onChange={inputsHandler} value={inputField.phone} placeholder="Your Phone" style={{ margin: "5px 0", border: "none", background: "#E5E5E5" }}></input><br />

                                                <button onClick={submitButton} className="mt-2" style={{ background: "#1C4A45", color: "white", padding: "0 20px" }}>
                                                    Submit
                                                    {loading2 && <CircularProgress size={12} style={{ 'color': 'yellow' }} className='ml-3' />}
                                                </button>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Please share this link"}
                            <Button onClick={handleCopy}>{copy}</Button>
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                {shareLink}
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Ok</Button>
                        </DialogActions>
                    </Dialog>

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
                </div> :
                <div className='row'>
                    <Box sx={{ display: 'flex', margin: "auto", height: "500px" }}>
                        <CircularProgress color='success' />
                    </Box>
                </div>
            }
        </>
    )
}
