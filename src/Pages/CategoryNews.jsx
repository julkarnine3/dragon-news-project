import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Newscard from '../Components/Newscard/Newscard';

const CategoryNews = () => {
    const newsData = useLoaderData();
    const { id } = useParams();
    const parsedId = parseInt(id);
    const [categoryNews, setCategoryNews] = useState([]);
    // console.log (typeof parsedId,parsedId, newsData);
    useEffect(() => {
        if (parsedId === 0) {
            setCategoryNews(newsData);
            return;
        }
        else if (parsedId === 1) {
            const filteredNews = newsData.filter(news => news.others.is_today_pick == true);
            setCategoryNews(filteredNews);
        }
        else {
            const filteredNews = newsData.filter(news => news.category_id === parsedId);
            setCategoryNews(filteredNews);
        }

    }, [newsData, parsedId])

    return (
        <div>
            <h1 className='font-semibold text-center text-2xl'>Total <span className='text-secondary font-bold'>{categoryNews.length}</span> News in this category</h1>
            <div className='grid grid-cols-1 gap-5 mt-5'>
                {
                    categoryNews.map(news=> <Newscard key={news.id} news={news}></Newscard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;