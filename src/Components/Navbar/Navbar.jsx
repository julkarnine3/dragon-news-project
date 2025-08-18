import React from 'react';
import { NavLink } from 'react-router';
import user from '../../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between'>
            <div className=""></div>
            <div className="nav flex ">
                <ul className='flex justify-around items-center  gap-5 text-base-200'>
                    <NavLink to='/'><li>Home</li></NavLink>
                    <NavLink to='/about'><li>About</li></NavLink>
                    <NavLink to='/career'><li>Career</li></NavLink>
                </ul>
            </div>
            <div className="login-btn flex gap-5 ">
                <img src={user} alt="" />
                <button className='btn btn-primary px-10'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;