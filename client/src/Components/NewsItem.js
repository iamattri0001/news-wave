import React from 'react'

function NewsItem({ title, author, description, url, urlToImage, publishedAt, content, category }) {
    return (
        <div className='bg-gray-900 flex-col md:flex-row flex px-2 md:px-4 py-4 gap-x-2 rounded-lg'>
            <div className='flex items-center justify-center mb-3 md:mb-0'>
                <img src={urlToImage ? urlToImage : `https://source.unsplash.com/random/300%C3%97200/?${category}`} alt="" className='max-w-[280px] max-h-[180px] md:max-w-[420px] md:max-h-[340px] h-auto w-auto rounded' />
            </div>
            <div className='flex flex-col gap-y-2 flex-wrap text-center justify-center w-full text-[14px] md:text-base'>
                <h3 className='text-primary md:text-xl special-font'>{title}</h3>
                <p>{description}</p>
                <p className='text-gray-500'>{content}</p>
                <div className='flex items-center flex-wrap justify-center gap-x-2 md:gap-x-3'>
                    <span className='special-font'>{author}</span>
                    <span>{publishedAt ? publishedAt.slice(0, 10) : ""}</span>
                    <span className='text-blue-400 underline hover:text-blue-700'><a href={url}>Source</a> </span>
                </div>
            </div>
        </div>
    )
}

export default NewsItem