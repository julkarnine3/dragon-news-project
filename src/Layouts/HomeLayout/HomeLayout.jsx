import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../Components/Header/Header';
import LatestNews from '../../Components/LatestNews/LatestNews';
import Navbar from '../../Components/Navbar/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <header className='mt-5'>
                <Header></Header>
                <section className='w-11/12 mx-auto py-5'>
                    <LatestNews></LatestNews>
                </section>
                <section className='w-11/12 mx-auto py-5'>
                     <Navbar></Navbar>
                </section>

            </header>
            <main>
                <section className='left_nav'></section>
                <section className='main'>
                    <Outlet></Outlet>
                </section>
                <section className='right_nav'></section>
            </main>
        </div>
    );
};

export default HomeLayout;