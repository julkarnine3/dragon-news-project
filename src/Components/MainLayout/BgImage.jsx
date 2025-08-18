import React from 'react';
import bgImage from '../../assets/bg.png';

const BgImage = () => {
    return (
        <div className='flex items-center justify-center'>
            <img src={bgImage} alt="" />
        </div>
    );
};

export default BgImage;