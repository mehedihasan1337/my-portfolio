import React from 'react';
import Nevbar from '../components/Nevbar';
import Banner from '../components/Banner';

const Home = () => {
    return (
        <div className='font-roboto'>
           <nav className='hover:bg-black'>
           <Nevbar></Nevbar>
        
           </nav>
           <section className='bg-gradient-to-r from-gray-950 from-30%  to-sky-900 to-90% ...'>
            <Banner></Banner>
           </section>
        </div>
    );
};

export default Home;