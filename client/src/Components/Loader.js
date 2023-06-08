import React from 'react'
import './Loader.css';
function Loader() {
    return (
        <div className='flex items-center justify-center w-full h-[70vh]'>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loader