import React from 'react';
import swim from './../../assets/swimming.png';
import classImage from "../../assets/class.png";
import playground from './../../assets/playground.png';

const QZone = () => {
    return (
        <div className='bg-base-300 rounded-lg p-4 space-y-5'>
            <h1 className='font-bold text-xl '>Q-Zone</h1>
            <img src={swim} alt="" />
            <img src={classImage} alt="" />
            <img src={playground} alt="" />
        </div>
    );
};

export default QZone;