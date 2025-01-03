import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { MdPhone } from 'react-icons/md';

const Banner = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row justify-between w-10/12 mx-auto 
        '>
            <div className='mt-10'>
                <h4 className='text-white mb-3 text-md md:text-xl'>Hi, I am <span className='text-orange-600 font-bold hover:text-2xl'>Mehedi Hasan</span></h4>
                <h1 className='font-bold mb-2 text-sky-400 text-2xl md:text-4xl '> Fontend Developer</h1>
                <p className='text-white mb-4 text-xs md:text-sm w-4/6'>with a passion for crafting intuitive
                    and visually appealing websites.
                    From responsive design to smooth user interactions,
                    I focus on every detail.Let's collaborate to
                    bring your vision to life.
                    Explore my portfolio and see how I can help you
                    achieve your goals.</p>
                <div>

                </div>
                <div className='flex gap-4'>
                    <h2 className='border rounded-md border-orange-600 p-2  font-semibold bg-orange-500 text-white flex items-center gap-1'
                    >Download Resume <FaArrowDown className='text-white hover:text-black ' /> </h2>
                    <h2 className='border rounded-md border-orange-600 p-2 text-orange-600 font-semibold hover:bg-orange-500 hover:text-white flex items-center gap-1'
                    >Contact Me <MdPhone className='text-white hover:text-black ' /> </h2>
                </div>
            </div>
            <div>
                <img className='w-3/4 rounded-full' src="https://i.ibb.co.com/gwMtx37/Whats-App-Image-2025-01-03-at-23-42-28-52e8e3b7.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;