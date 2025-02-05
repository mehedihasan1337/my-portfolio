import React from 'react';
import Nevbar from '../components/Nevbar';
import Banner from '../components/Banner';
import About from './About';
import Skill from './Skill';
import OtherSkills from './OtherSkills';
import MyProjects from './MyProjects';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
    return (
        <div className='font-roboto bg-gray-950'>
           <nav className='hover:bg-slate-800'>
           <Nevbar></Nevbar>
        
           </nav>
           <section className='bg-gradient-to-r from-gray-950 from-30%  to-sky-900 to-90% ... '>
            <Banner></Banner>
           </section>
           <section className='hover:bg-gradient-to-tr  from-gray-950 from-10%  to-sky-900 to-0%..  '>
            <About></About>
           </section>
           <section className='hover:bg-gradient-to-bl  from-gray-950 from-10%  to-sky-900 to-0%.. '>
            <Skill></Skill>
           </section>
           <section className='hover:bg-gradient-to-tr  from-gray-950 from-10%  to-sky-900 to-0%.. '>
            <OtherSkills></OtherSkills>
           </section>
           <section className='hover:bg-gradient-to-br  from-gray-950 from-10%  to-sky-900 to-0%.. '>
            <MyProjects></MyProjects>
           </section>
           <section className='hover:bg-gradient-to-bl  from-gray-950 from-10%  to-sky-900 to-0%.. '>
            <Contact></Contact>
           </section>
           <footer className=''>
            <Footer></Footer>
           </footer>

        </div>
    );
};

export default Home;