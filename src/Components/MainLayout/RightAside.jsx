import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import QZone from './QZone';
import BgImage from './BgImage';

const RightAside = () => {
    return (
        <div className='space-y-5'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <QZone></QZone>
            <BgImage></BgImage>
        </div>
    );
};

export default RightAside;