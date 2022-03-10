import React from 'react'
import AdminSidebar from './AdminSidebar';
import { Link, useParams } from 'react-router-dom';
import '../../assets/css/Admin/UserDetails.css';
import { useState, useEffect } from 'react';
import userService from '../../services/UserService.js';
import referralService from '../../services/ReferralService.js';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function UserDetails() {
    let [user, setUsers] = useState();
    let [ref, setRef] = useState(0);
    let [share, setShare] = useState(0);
    let id = useParams();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        userService.getUserById(id.uId).then((res) => {
            if (res.status == 'success') {
                setUsers(res?.data);
                setLoading(false);
            }
        })
    }, []);
    useEffect(() => {
        referralService.getCount({ user_id: id.uId }).then((res) => {
            if (res?.status == 'success') {
                res?.count > 0 ? setRef(res?.count) : setRef(0);
                setLoading(false);
            }
        }).catch((err) => {
            setRef(0);
            setLoading(false);
        })

        return () => {
            setRef(0);
        };
    }, []);
    useEffect(() => {
        referralService.getTotalShareCountByUserId(id.uId).then((res) => {
            if (res.status == 'success') {
                res?.count > 0 ? setShare(res?.count) : setShare(0);
                setLoading(false);
            }
        }).catch((err) => {
            setShare(0);
            setLoading(false);
        })

        return () => {
            setShare(0);
        };
    }, []);
    return (
        <>
            {!loading ?
                <div className='container-fluid'>
                    <div className='row'>
                        <AdminSidebar />
                        <div className='col-md-8'>
                            <div className='d-flex justify-content-between'>
                                <Link to="/admins/users">
                                    <span className="material-icons-outlined" style={{ color: "#1C4A45", fontWeight: "bold" }}>
                                        keyboard_backspace
                                    </span>
                                </Link>
                                <h3 className='' style={{ color: "#1C4A45", fontSize: "36px" }}>Customer Details</h3>
                                <h3 className=''></h3>
                            </div>
                            <div className='mt-4'>
                                <div className="card">
                                    <div className="cardBody">
                                        <p className='title'>Personal Information</p>
                                        <label>Name</label><span className='name'>:</span><span>{user?.name}</span><hr />
                                        <label>Email</label><span className='email'>:</span><span>{user?.email}</span><hr />
                                        <label>Phone</label><span className='phone'>:</span><span>{user?.phone_number}</span><hr />

                                    </div>
                                </div>
                            </div>
                            <div className='cardSection'>
                                <div className='user-card__container'>
                                    <div className='user-card'>
                                        <h2 className='user-card__title'>
                                            User ID
                                        </h2>
                                        <p className='user-card__detail'>
                                            {user?.id}
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
                                            Total Referral
                                        </h2>
                                        <p className='user-card__detail'>
                                            {ref}
                                        </p>
                                    </div>
                                </div>
                            </div>
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
