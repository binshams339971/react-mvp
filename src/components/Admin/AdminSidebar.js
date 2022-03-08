import '../../assets/css/Admin/AdminSidebar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { logout } from '../../helpers/authHelper';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        <div className="col-md-3 sideMenu">
            <h3 className="menuHeader">Categories</h3>
            <ul className="catList">
                <NavLink to="/admins/dashboard" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><li><i className="fa-solid fa-headset"></i>Dashboard</li></NavLink>
                <NavLink to="/admins/products" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><li><i className="fa-solid fa-shirt"></i>Product's</li></NavLink>
                <NavLink to="/admins/users" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><li><i className="fa-solid fa-headset"></i>User's</li></NavLink>
            </ul>
            <div className='signOut text-center'>
                <a onClick={signOutButton} className="signOutBtn">Sign out</a>
            </div>
        </div>
    )
}

export default AdminSidebar;