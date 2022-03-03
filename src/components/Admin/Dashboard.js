import '../../assets/css/Admin/Dashboard.css';
import { NavLink, Link } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import dashStat from '../../assets/images/dashStat.JPG';
import dashStat2 from '../../assets/images/dashStat2.JPG'
function Dashboard() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <AdminSidebar />
                    <div className='col-md-6'>
                        <div className='d-flex justify-content-between'>
                            <Link to="/">
                                <span class="material-icons-outlined" style={{ color: "#1C4A45", fontWeight: "bold" }}>
                                    keyboard_backspace
                                </span>
                            </Link>
                            <h3 className='' style={{ color: "#1C4A45", fontSize: "36px" }}>Overview</h3>
                            <h3 className=''></h3>
                        </div>
                        <div className='dashboard-card__container'>
                            <div className='dashboard-card'>
                                <h2 className='dashboard-card__title'>
                                    Total User
                                </h2>
                                <p className='dashboard-card__detail'>
                                    6.3K
                                </p>
                            </div>

                            <div className='dashboard-card'>
                                <h2 className='dashboard-card__title'>
                                    Total Item
                                </h2>
                                <p className='dashboard-card__detail'>
                                    16K
                                </p>
                            </div>

                            <div className='dashboard-card'>
                                <h2 className='dashboard-card__title'>
                                    Total Share
                                </h2>
                                <p className='dashboard-card__detail'>
                                    43K
                                </p>
                            </div>
                        </div>
                        <img src={dashStat} style={{ width: "90%" }} />
                    </div>
                    <div className='col-md-3'>
                        {/* <img src={dashStat2} style={{ width: "90%", height: "90%" }} /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;