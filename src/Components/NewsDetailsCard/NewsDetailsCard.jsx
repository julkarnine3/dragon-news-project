import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    console.log(news);
    return (
        <div className='space-y-5'>
            <img className='w-full h-[350px] rounded-lg object-cover' src={news.image_url} alt="" />
            <h1 className='font-bold text-2xl'>{news.title}</h1>
            <p className='text-base-200'>{news.details}</p>
            <Link to={`/category/${news.category_id}`} className='btn btn-secondary'>
            <IoArrowBack /> All news in this category
            </Link>
        </div>
    );
};

export default NewsDetailsCard;