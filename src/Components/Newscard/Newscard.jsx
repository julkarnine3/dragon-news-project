import React from 'react';
import { CiBookmark } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { MdRemoveRedEye } from 'react-icons/md';
import { TbChartDots3 } from 'react-icons/tb';

const Newscard = ({ news }) => {
    const {
        title,
        rating,
        total_view,
        author,
        thumbnail_url,
        image_url,
        details,
        tags,
        others
    } = news;

    return (
        <div className="card  bg-base-100 shadow-xl mx-auto p-5">
            <div className="flex items-center justify-between mt-2 bg-base-300 p-3 rounded-xl">
                <div className='flex items-center space-x-2'>
                    <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full" />
                    <div>
                        <span className="font-semibold">{author.name}</span>
                        <br />
                        <span className="text-sm text-gray-500">{new Date(author.published_date).toLocaleDateString()}</span>
                    </div>
                </div>
                <div className='flex gap-3 items-center'>
                    <CiBookmark size={24} />
                    <TbChartDots3 size={24} />
                </div>
            </div>
            <h2 className="card-title text-xl font-semibold pt-4 pb-4">{title}</h2>
            <figure>
                <img src={thumbnail_url} alt="Thumbnail" className="w-full rounded-lg object-cover" />
            </figure>
            <div className="card-body p-4">
            {details.length > 200 ? (
                <>
                    {details.slice(0,200)}...
                    <span className='font-semibold text-primary cursor-pointer hover:underline text-red-400'>Read More</span>
                </>
            ):
            (
                details

            ) }
            </div>
            <div className="border-t-2 border-dotted border-gray-300 my-4"></div>
            <div className="flex justify-between items-center ">
               {/* Rating */}
               <div className='flex items-center gap-1 text-orange-400'>
                {Array.from({length:rating.number}).map((_, i)=>(
                    <FaStar key={i}></FaStar>
                ))}
                <span className='ml-2 text-gray-600'>{rating.number}</span>
               </div>
                <div className="card-footer flex items-center gap-3 justify-between p-4">
                    <MdRemoveRedEye />
                <span className="text-sm text-gray-500">
{total_view} Views</span>
            </div>
            </div>
            
        </div>
    );
};

export default Newscard;
