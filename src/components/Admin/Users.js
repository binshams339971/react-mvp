import AdminSidebar from './AdminSidebar';
import { Link } from 'react-router-dom';
import '../../assets/css/Admin/Users.css';
import { useState, useEffect } from 'react';
import userService from '../../services/UserService.js';
import CustomPaginationActionsTable from 'components/Admin/UsersTable.js';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        userService.getUsers().then((users) => {
            if (users.status == 'success') {
                setUsers(users?.data);
                setLoading(false);
            } else {
                console.log("Failed");
            }
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    useEffect(() => {
        //console.log(users);
    }, [users]);
    return (
        <>
            {!loading ?
                <div className='container-fluid'>
                    <div className='row'>
                        <AdminSidebar />
                        <div className='col-md-8'>
                            <div className='d-flex justify-content-between'>
                                <Link to="/">
                                    <span className="material-icons-outlined" style={{ color: "#1C4A45", fontWeight: "bold" }}>
                                        keyboard_backspace
                                    </span>
                                </Link>
                                <h3 className='' style={{ color: "#1C4A45", fontSize: "36px" }}>Customer</h3>
                                <h3 className=''></h3>
                            </div>
                            <div className='mt-4'>
                                {/* <div className='d-flex justify-content-center'>
                                    <input type="text" placeholder="Search" className='searchBox0' />
                                </div> */}
                                <div className='userInfo'>
                                    <CustomPaginationActionsTable data={users} />
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

export default Users;