import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({ active }) {
  return (
    <div className='md:px-7 px-2 py-3 md:py-5 bg-faded rounded-br-xl rounded-bl-xl' id='header'>
      <div className='flex flex-col md:flex-row gap-y-5 md:gap-y-0 items-center justify-between'>
        <span className='text-2xl md:text-3xl text-primary font-bold mx-2 special-font'>NEWS</span>
        <nav className='md:ml-20 md:text-[18px]'>
          <ul className='flex gap-x-8 gap-y-3 flex-wrap justify-center'>
            <li className={`cursor-pointer transition-all hover:text-primary ${active === `general` ? `scale-125 text-primary` : ``}`}>
              <Link to='/'>
                General
              </Link>
            </li>

            <li className={`cursor-pointer transition-all hover:text-primary ${active === `entertainment` ? `scale-125 text-primary` : ``}`}>
              <Link to='/entertainment'>
                Entertainment
              </Link>
            </li>

            <li className={`cursor-pointer transition-all hover:text-primary ${active === `business` ? `scale-125 text-primary` : ``}`}>
              <Link to='/business'>
                Business
              </Link>
            </li>

            <li className={`cursor-pointer transition-all hover:text-primary ${active === `sports` ? `scale-125 text-primary` : ``}`}>
              <Link to='/sports'>
                Sports
              </Link>
            </li>

            <li className={`cursor-pointer transition-all hover:text-primary ${active === `health` ? `scale-125 text-primary` : ``}`}>
              <Link to='/health'>
                Health
              </Link>
            </li>

            <li className={`cursor-pointer transition-all hover:text-primary ${active === `science` ? `scale-125 text-primary` : ``}`}>
              <Link to='/science'>
                Science
              </Link>
            </li>

            <li className={`cursor-pointer transition-all hover:text-primary ${active === `technology` ? `scale-125 text-primary` : ``}`}>
              <Link to='/technology'>
                Technology
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar