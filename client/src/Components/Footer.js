import React from 'react'

function Footer() {
    return (
        <div className='bg-faded px-7 py-4 text-lg flex items-center justify-between'>
            <h5 className='text-center'>All rights reserved  &copy; </h5>
            <span className='text-primary'>&#8593;<a href="#header" className='hover:underline'> Back To Top </a> </span>
        </div>
    )
}

export default Footer