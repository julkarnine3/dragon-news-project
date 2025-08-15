import React from 'react';
import logo from '../../assets/logo.png';
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <img className='w-[400px]' src={logo} alt="" />
            <p className='text-accent mt-3'>Journalism Without Fear or Favour</p>
            <p>{format(new Date(), "EEEE, MMMM MM, yyyy")}</p>
        </div>
    );
};

export default Header;