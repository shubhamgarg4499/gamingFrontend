import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className='bg-gray-900 shadow-2xl p-5 px-6 flex w-full items-center'>
                <div className='md:w-1/2  mx-auto md:m-0'> <Link to={"/"}><h3 className='text-2xl font-bold text-white '>Cloud Gaming</h3></Link></div>
                <ul className='md:flex hidden w-1/2 justify-end'>
                    <Link to={"/contact-us"}><li className='list-none text-white mx-6 uppercase text-xs font-semibold'>Contact us</li></Link>
                    <Link to={"/policy"}><li className='list-none text-white mx-6 uppercase text-xs font-semibold'>Privacy Policy</li></Link>
                    <Link to={"/about"}><li className='list-none text-white mx-6 uppercase text-xs font-semibold'>About</li></Link>
                </ul>

            </div>
        </>
    )
}

export default Header