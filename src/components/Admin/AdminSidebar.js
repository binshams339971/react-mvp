import '../../assets/css/Admin/Dashboard.css';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
function AdminSidebar() {

    return (
        <div class="col-md-3 sideMenu">
            <h3 class="menuHeader">Categories</h3>
            <ul class="catList">
                <NavLink to="/admin/dashboard" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><li><i className="fa-solid fa-headset"></i>Dashboard</li></NavLink>
                <NavLink to="/admin/products" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><li><i className="fa-solid fa-shirt"></i>Product's</li></NavLink>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><li><i className="fa-solid fa-headset"></i>User's</li></NavLink>
            </ul>
            <div class='signOut text-center'>
                <a href='#' class="signOutBtn">Sign in</a>
            </div>
        </div>
    )
}

export default AdminSidebar;