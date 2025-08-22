import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-300 min-h-screen'>
            <header className='w-11/12 mx-auto py-5'>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;