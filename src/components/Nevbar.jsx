import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Nevbar = () => {
    const navOptions = <>
        <Link className='font-roboto' to="/">Home</Link>
    </>


    return (
        <div className="navbar w-10/12 mx-auto bg-opacity-30 max-w-screen-xl  ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navOptions}
                    </ul>
                </div>
                <h2 className='font-roboto text-xl font-bold md:text-3xl hover:text-4xl text-white'> Mehedi <span className='text-orange-600'>H</span>.</h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <h2 className='border border-orange-600 p-2 text-orange-600 font-semibold hover:bg-orange-500 hover:text-white flex items-center gap-1'
                >Download Resume <FaArrowDown className='text-white hover:text-black ' /> </h2>
            </div>
        </div>
    );
};

export default Nevbar;