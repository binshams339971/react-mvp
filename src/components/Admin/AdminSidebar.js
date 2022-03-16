import '../../assets/css/Admin/AdminSidebar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { logout } from '../../helpers/authHelper';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import dashboardIcon from '../../assets/images/dashboard.png'
import productIcon from '../../assets/images/products.png'
import userIcon from '../../assets/images/users.png'
toast.configure();
function AdminSidebar() {
    let navigate = useNavigate();
    const signOutButton = () => {
        logout();
        toast.success('Sign out successful!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        navigate('/');
    }
    return (
        <>
            <div className="col-md-3 sideMenu">
                <h3 className="menuHeader">Categories</h3>
                <ul className="catList">
                    <NavLink to="/admins/dashboard" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><li><img src={dashboardIcon} className="dashboardIcn" />Dashboard</li></NavLink>
                    <NavLink to="/admins/products" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><li><img src={productIcon} className="dashboardIcn" />Product Management</li></NavLink>
                    <NavLink to="/admins/users" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><li><img src={userIcon} className="userIcn" />Customer Information</li></NavLink>
                </ul>
                <div className='signOut text-center'>
                    <a onClick={signOutButton} className="signOutBtn">Sign out</a>
                </div>
            </div>
            <div className='mobileMenu'>
                <ul className="">
                    <NavLink to="/admins/dashboard" className={({ isActive }) => (isActive ? 'activeLink' : 'inActiveLink')}><li>Dashboard</li></NavLink>
                    <NavLink to="/admins/products" className={({ isActive }) => (isActive ? 'activeLink' : 'inActiveLink')}><li>Product's</li></NavLink>
                    <NavLink to="/admins/users" className={({ isActive }) => (isActive ? 'activeLink' : 'inActiveLink')}><li>User's</li></NavLink>
                    {/* <li>Dashboard</li>
                    <li>Products</li>
                    <li>Users</li> */}
                </ul>
            </div>
        </>
    )
}

export default AdminSidebar;