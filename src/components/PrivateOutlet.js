import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { isLoggedIn } from '../helpers/authHelper';
export default function PrivateOutlet() {
    return isLoggedIn() ? <Outlet /> : <Navigate to="/signin" />;
}
