import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../../Components/Header/Header';
import LatestNews from '../../Components/LatestNews/LatestNews';
import Navbar from '../../Components/Navbar/Navbar';
import LeftAside from '../../Components/MainLayout/LeftAside';
import RightAside from '../../Components/MainLayout/RightAside';
import Loading from '../../Components/Loading/Loading';

const HomeLayout = () => {
    const {state} = useNavigation();
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
            <main className='w-11/12 mx-auto my-3  grid grid-cols-12 gap-4'>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main col-span-6 '>
                   {state=="loading" ? <Loading></Loading> :  <Outlet></Outlet>}
                </section>
               <aside className='col-span-3 sticky top-0 h-fit'>
                <RightAside></RightAside>
               </aside>
            </main>
        </div>
    );
};

export default HomeLayout;