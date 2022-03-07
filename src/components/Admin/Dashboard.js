import '../../assets/css/Admin/Dashboard.css';
import { NavLink, Link } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import dashStat from '../../assets/images/dashStat.JPG';
import dashStat2 from '../../assets/images/dashStat2.JPG';
import { useState, useEffect } from 'react';
import userService from '../../services/UserService.js';
import productService from '../../services/ProductService.js';
import referralService from '../../services/ReferralService.js';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
function Dashboard() {
    let [users, setUsers] = useState(0);
    const [prods, setProds] = useState(0);
    const [share, setShare] = useState(0);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        userService.getCount().then((count) => {
            if (count.status == 'success') {
                setUsers(count?.count);
                setLoading(false);
            }
        });

    });
    useEffect(() => {
        productService.getProducts().then((products) => {
            if (products.status == 'success') {
                setProds(products?.data.length);
                setLoading(false);
            } else {
                console.log("Failed");
            }
        }).catch((error) => {
            console.log(error);
        });
        console.log(prods)
    });
    useEffect(() => {
        referralService.getCount().then((c) => {
            if (c.status == 'success') {
                setShare(c?.data.length);
                setLoading(false);
            } else {
                console.log("Failed");
            }
        }).catch((error) => {
            console.log(error);
        });
        console.log(prods)
    });
    return (
        <>
            {!loading ?
                <div className='container-fluid'>
                    <div className='row'>
                        <AdminSidebar />
                        <div className='col-md-9 dash'>
                            <div className='d-flex justify-content-between'>
                                <Link to="/">
                                    <span className="material-icons-outlined" style={{ color: "#1C4A45", fontWeight: "bold" }}>
                                        keyboard_backspace
                                    </span>
                                </Link>
                                <h3 className='' style={{ color: "#1C4A45", fontSize: "36px" }}>Overview</h3>
                                <h3 className=''></h3>
                            </div>
                            <div className='dashboard-card__container mt-4'>
                                <div className='dashboard-card'>
                                    <h2 className='dashboard-card__title'>
                                        Total User
                                    </h2>
                                    <p className='dashboard-card__detail'>
                                        {users}
                                    </p>
                                </div>

                                <div className='dashboard-card'>
                                    <h2 className='dashboard-card__title'>
                                        Total Item
                                    </h2>
                                    <p className='dashboard-card__detail'>
                                        {prods}
                                    </p>
                                </div>

                                <div className='dashboard-card'>
                                    <h2 className='dashboard-card__title'>
                                        Total Share
                                    </h2>
                                    <p className='dashboard-card__detail'>
                                        {share}
                                    </p>
                                </div>
                            </div>
                            {/* <img src={dashStat} style={{ width: "90%" }} /> */}
                        </div>
                        <div className='col-md-0'>
                            {/* <img src={dashStat2} style={{ width: "90%", height: "90%" }} /> */}
                        </div>
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

export default Dashboard;