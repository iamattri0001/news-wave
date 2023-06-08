import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader';
import { fetchNews } from '../Routes/fetchRoutes'
import axios from 'axios';

function News({ category, apiKey }) {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    const token = process.env.REACT_APP_TOKEN;

    async function getData() {
        setLoading(true);
        let { data } = await axios.post(fetchNews, { category, token });
        setArticles(data.data.articles);
        setLoading(false);
    }
    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        <div className='my-10 min-h-screen'>
            <div>
                <h1 className='text-4xl text-center'>Trending in {capitalizeFirstLetter(category)}</h1>
                {loading && <Loader />}

                {!loading && <div className='mt-10 flex flex-col gap-y-5'>
                    {articles && articles.map(article => {
                        return <NewsItem key={article.url} title={article.title} author={article.author} description={article.description} url={article.url} urlToImage={article.urlToImage} publishedAt={article.publishedAt} content={article.content} category={category} />
                    })}
                </div>}
            </div>
        </div>
    )
}

export default News