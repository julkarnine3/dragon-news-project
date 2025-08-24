import React, { use } from 'react';
import { Link, Navigate, NavLink, useNavigate } from 'react-router';
import userIcon from '../../assets/user.png'
import { AuthContext } from '../../Provider/AuthProvider';


const Navbar = () => {
    const { user, logOut } = use(AuthContext);
    const navigate = useNavigate()
    const handleLogout = () => {
        console.log("User trying to logout");
        logOut();
        navigate('/auth/login');
    }

    return (
        <div className='flex justify-between'>
            <p>{user && user.email}</p>
            <div className=""></div>
            <div className="nav flex ">
                <ul className='flex justify-around items-center  gap-5 text-base-200'>
                    <NavLink to='/'><li>Home</li></NavLink>
                    <NavLink to='/about'><li>About</li></NavLink>
                    <NavLink to='/career'><li>Career</li></NavLink>
                </ul>
            </div>
            <div className="login-btn flex gap-5 ">
                <img className='w-12 rounded-full border-2 border-gray-400 p-1' src={`${user ? user.photoURL : userIcon}`} alt="" />
                {
                    user ? <button onClick={handleLogout} className='btn btn-secondary px-10'>Logout</button> : <Link to="/auth/login" className='btn btn-primary px-10'>Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;