import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-3 p-3 bg-base-300 rounded-2'>
            <p className='bg-secondary text-base-100 px-3 py-2 rounded-md'>Latest</p>
            <Marquee className='flex  gap-5' pauseOnHover={true} speed={60}>
                <p className='text-base-200 font-bold'>Match Highlights: Germany vs Spain — as it happened! Match Highlights: Germany vs Spain as...</p>

                <p className='text-base-200 font-bold'>Match Highlights: Germany vs Spain — as it happened! Match Highlights: Germany vs Spain as...</p>

                <p className='text-base-200 font-bold'>Match Highlights: Germany vs Spain — as it happened! Match Highlights: Germany vs Spain as...</p>
 
            </Marquee>
        </div>
    );
};

export default LatestNews;