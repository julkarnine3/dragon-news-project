import React, { useEffect, useState } from 'react';
import Header from '../Components/Header/Header';
import RightAside from '../Components/MainLayout/RightAside';
import NewsDetailsCard from '../Components/NewsDetailsCard/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [news, setNews] = useState({});
    useEffect(()=>{
        const newsDetails = data.find(singleNews => singleNews.id == id);
        setNews(newsDetails);
    },[data,id])
    // console.log(data,id,news);

    return (
        <div>
            <header className='py-5'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto py-5 grid grid-cols-12 gap-5 '>
                <section className='col-span-9'>
                    <h1 className='font-bold text-xl mb-5'>Dragon News</h1>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <section className='col-span-3'>
                    <RightAside></RightAside>
                </section>
            </main>
        </div>
    );
};

export default NewsDetails;