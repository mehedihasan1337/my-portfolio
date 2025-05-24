import React from 'react';
import { FaArrowDown, FaPhone } from 'react-icons/fa';
import { MdPhone } from 'react-icons/md';
import Icon from './Icon';

const Banner = () => {
    const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/public/Mehedi Hasan Fullstack Developer Resume..pdf";
  link.download = "Mehedi Hasan Fullstack Developer Resume..pdf";
  link.click();
};
    return (
        <div id='home' className='flex flex-col-reverse md:flex-row justify-between  w-10/12 mx-auto'>
            <div className='mt-10 '>
                <h4 className='text-white mb-3 text-md md:text-xl '>Hi, I am <span className='text-orange-600 font-bold hover:text-2xl'>Mehedi Hasan</span></h4>
                <h1 className='font-bold mb-2 text-sky-400 text-2xl md:text-4xl '> Fontend Developer</h1>
                <p className='text-white mb-4 text-xs md:text-sm w-4/6'>with a passion for crafting intuitive
                    and visually appealing websites.
                    From responsive design to smooth user interactions,
                    I focus on every detail.Let's collaborate to
                    bring your vision to life.
                    Explore my portfolio and see how I can help you
                    achieve your goals.</p>
                    <Icon></Icon>
                <div>

                </div>
                <div className='flex gap-4 my-5'>
                    <a onClick={handleDownload}><h2 className='border rounded-md border-orange-600 p-2  font-semibold bg-orange-500 text-white flex items-center gap-1'
                    >Download Resume <FaArrowDown className='text-white hover:text-black ' /> </h2></a>
                    <a href="tel:+880 1763-348775"><h2 className='border rounded-md border-orange-600 p-2 text-orange-600 font-semibold hover:bg-orange-500 hover:text-white flex items-center gap-1'
                    >Contact Me <FaPhone className='text-white hover:text-black ' /> </h2></a>
                </div>
            </div>
          <div className="mt-10 mb-4 flex justify-center">
  <div className="w-72 h-72 rounded-full p-[4px] bg-gradient-to-tr from-[#00B4DB] via-[#0083B0] to-[#0f172a]">
    <img
      className="w-full h-full object-cover rounded-full border-4 border-[#0F172A]"
      src="https://i.ibb.co/bM6fN27f/IMG-20250415-WA0052-Copy.png"
      alt="Profile"
    />
  </div>
</div>
        </div>
    );  
};

export default Banner;