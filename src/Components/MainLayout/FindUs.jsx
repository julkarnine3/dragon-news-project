import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h1 className='font-bold text-xl'>Find Us On</h1>
            <div>
                <div className="join join-vertical w-full mt-5 ">
                    <button className="btn bg-base-100 justify-start border-gray-300  join-item"><FaFacebook size={20}></FaFacebook> Facebook</button>
                    <button className="btn bg-base-100 justify-start border-gray-300 join-item"><FaTwitter size={20}></FaTwitter> Twitter</button>
                    <button className="btn bg-base-100 justify-start border-gray-300  join-item"><FaInstagram size={20}></FaInstagram>Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;