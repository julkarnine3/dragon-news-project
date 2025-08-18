import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

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
            <h1>Total Category News - {categoryNews.length}</h1>
        </div>
    );
};

export default CategoryNews;