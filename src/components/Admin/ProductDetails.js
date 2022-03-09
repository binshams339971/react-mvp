import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import AdminSidebar from './AdminSidebar';
import CustomPaginationActionsTable from './ProductReferTable';
import '../../assets/css/ProductDetails.css';
import { Link, useParams, useNavigate } from "react-router-dom";
import productService from '../../services/ProductService.js';
import fileService from '../../services/FileService.js';
import referralService from '../../services/ReferralService.js';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function ProductDetails() {
    let id = useParams();
    let [loading, setLoading] = useState(true);
    let [prod, setProd] = useState();
    let [video, setVideo] = useState();
    let [share, setShare] = useState(0);
    let [shareUser, setShareUser] = useState(0);
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

    useEffect(() => {
        referralService.getTotalShareCountByProductId(id.pId).then((res) => {
            if (res.status == 'success') {
                res?.count > 0 ? setShare(res?.count) : setShare(0);
                setLoading(false);
            }
        }).catch((err) => {
            setShare(0);
            setLoading(false);
        })
    }, []);

    useEffect(() => {
        referralService.getTotalDistinctShareCountByProductId(id.pId).then((res) => {
            if (res.status == 'success') {
                res?.count > 0 ? setShareUser(res?.count) : setShareUser(0);
                setLoading(false);
            }
        }).catch((err) => {
            setShareUser(0);
            setLoading(false);
        })
    }, []);

    var referers = [
        {
            id: 1,
            name: "ABC",
            media: "Facebook",
            count: 5
        },
        {
            id: 5,
            name: "XYZ",
            media: "Twitter",
            count: 2
        }
    ]

    return (
        <>
            {!loading ?
                <div className='container-fluid'>
                    <div className='row'>
                        <AdminSidebar />
                        <div className='col-md-8'>
                            <div className='d-flex justify-content-between'>
                                <Link to="/admins/products">
                                    <span className="material-icons-outlined" style={{ color: "#1C4A45", fontWeight: "bold" }}>
                                        keyboard_backspace
                                    </span>
                                </Link>
                                <h3 className='' style={{ color: "#1C4A45", fontSize: "36px" }}>Product Details</h3>
                                <h3 className=''></h3>
                            </div>
                            <div className='cardSection'>
                                <div className='user-card__container'>
                                    <div className='user-card'>
                                        <h2 className='user-card__title'>
                                            Product ID
                                        </h2>
                                        <p className='user-card__detail'>
                                            {prod?.id}
                                        </p>
                                    </div>

                                    <div className='user-card'>
                                        <h2 className='user-card__title'>
                                            Total Share
                                        </h2>
                                        <p className='user-card__detail'>
                                            {share}
                                        </p>
                                    </div>

                                    <div className='user-card'>
                                        <h2 className='user-card__title'>
                                            Share by Different User
                                        </h2>
                                        <p className='user-card__detail'>
                                            {shareUser}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <h3 className='text-center' style={{ color: "#4A4A4A", fontSize: "36px" }}>Referral history</h3>
                            <CustomPaginationActionsTable data={referers} />
                            {/* <h3 className='text-center' style={{ color: "#4A4A4A", fontSize: "36px" }}>{prod?.name}</h3>
                            <div className='mt-4'>
                                <div className='d-flex justify-content-center mb-4 mt-md-3 mt-0'>
                                    <ReactPlayer controls url={video} playing={false} />
                                </div>
                            </div> */}
                        </div>
                        <div className='col-md-1'></div>
                    </div>
                </div> :
                <div className='row'>
                    <AdminSidebar />
                    <Box sx={{ display: 'flex', margin: "auto" }}>
                        <CircularProgress color='success' />
                    </Box>
                </div>
            }
        </>
    )
}
