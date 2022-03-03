import React from 'react'
import AdminSidebar from './AdminSidebar';
import { Link } from 'react-router-dom';
import '../../assets/css/Admin/UserDetails.css';
export default function UserDetails() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <AdminSidebar />
                    <div className='col-md-8'>
                        <div className='d-flex justify-content-between'>
                            <Link to="/">
                                <span class="material-icons-outlined" style={{ color: "#1C4A45", fontWeight: "bold" }}>
                                    keyboard_backspace
                                </span>
                            </Link>
                            <h3 className='' style={{ color: "#1C4A45", fontSize: "36px" }}>Customer Details</h3>
                            <h3 className=''></h3>
                        </div>
                        <div className='mt-4'>
                            <div className="card">
                                <div className="card-body">
                                    <p className='title'>Personal Information</p>
                                    <label>Name</label><span className='name'>:</span><span>Lindsey Stroud</span><hr />
                                    <label>Email</label><span className='email'>:</span><span>stroud@email.com</span><hr />
                                    <label>Phone</label><span className='phone'>:</span><span>+135896 - 8569</span><hr />

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
                                        001
                                    </p>
                                </div>

                                <div className='user-card'>
                                    <h2 className='user-card__title'>
                                        Total Share
                                    </h2>
                                    <p className='user-card__detail'>
                                        50
                                    </p>
                                </div>

                                <div className='user-card'>
                                    <h2 className='user-card__title'>
                                        Total View
                                    </h2>
                                    <p className='user-card__detail'>
                                        150
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-1'></div>
                </div>
            </div>
        </>
    )
}
