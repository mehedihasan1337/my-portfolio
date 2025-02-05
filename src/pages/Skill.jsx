import React from 'react';
import Marquee from 'react-fast-marquee';


const Skill = () => {
    return (
        <div id='skills' className='w-10/12 mx-auto '>
            <h2 className='pt-10 text-2xl md:text-4xl text-orange-500 font-bold text-center'>Skills </h2>
            <p className='w-10/12 mx-auto md:w-7/12 text-white mb-5 text-center'>
            Proficient in HTML, CSS, Tailwind css, JavaScript, React , nodeJs, expressJs,
             Firebase, mongodb, GitHub, Vite,

                 I specialize in creating responsive and visually
                stunning web applications. With a strong foundation
                in UI/UX design and modern development tools,
                I bring ideas to life with precision and creativity.</p>
           
                <Marquee>
                <div className='flex gap-4 text-white w-11/12 mx-auto '>

<div className=' text-center w-32   bg-black p-1 rounded-md mb-3'>
    <img className='w-16 mt-3 mx-auto ' src="https://img.icons8.com/?size=48&id=20909&format=png" alt="" />
    <h3>HTML</h3>
</div>
<div className=' text-center w-32 bg-black p-1 rounded-md mb-3'>
    <img className='w-16 mt-3 mx-auto' src="https://img.icons8.com/?size=48&id=21278&format=png" alt="" />
    <h3>CSS</h3>
</div>
<div className=' text-center w-32 bg-black p-1 rounded-md mb-3'>
    <img className='w-16 mt-3 mx-auto ' src="https://img.icons8.com/?size=48&id=CIAZz2CYc6Kc&format=png" alt="" />
    <h3>Tailwind css</h3>
</div>
<div className=' text-center w-32 bg-black p-1 rounded-md mb-3'>
    <img className='w-16 mt-3 mx-auto' src="https://img.icons8.com/?size=48&id=108784&format=png" alt="" />
    <h3>JavaScript</h3>
</div>
<div className=' text-center w-32 bg-black p-1 rounded-md mb-3'>
    <img className='w-16 mt-3 mx-auto' src="https://img.icons8.com/?size=48&id=123603&format=png" alt="" />
    <h3>React </h3>
</div>
<div className=' text-center w-32 bg-black p-1 rounded-md mb-3'>
    <img className='w-16 mt-3 mx-auto' src="https://img.icons8.com/?size=48&id=hsPbhkOH4FMe&format=png" alt="" />
    <h3>nodeJs</h3>
</div>
<div className=' text-center w-32 bg-black p-1 rounded-md mb-3'>
    <img className='w-14 mt-3 mx-auto rounded-full bg-slate-50 ' src="https://img.icons8.com/?size=50&id=kg46nzoJrmTR&format=png" alt="" />
    <h3>expressJs</h3>
</div>
<div className=' text-center w-32 bg-black p-1 rounded-md mb-3'>
    <img className='w-16 mt-3 mx-auto ' src="https://img.icons8.com/?size=80&id=9AHxUOg7E9q2&format=png" alt="" />
    <h3>Firebase</h3>
</div>
<div className=' text-center w-32 bg-black p-1 rounded-md mb-3'>
    <img className='w-16 mt-3 mx-auto ' src="https://img.icons8.com/?size=80&id=tBBf3P8HL0vR&format=png" alt="" />
    <h3> mongodb</h3>
</div>
<div className=' text-center w-32 bg-black p-1 rounded-md mb-3'>
    <img className='w-16 mt-3 mx-auto bg-slate-50 rounded-full ' src="https://img.icons8.com/?size=50&id=12599&format=png" alt="" />
    <h3>GitHub</h3>
</div>
<div className=' text-center w-32 bg-black p-1 rounded-md mb-3'>
    <img className='w-16 mt-3  mx-auto' src="https://img.icons8.com/?size=48&id=dJjTWMogzFzg&format=png" alt="" />
    <h3>vite</h3>
</div>


</div>
                </Marquee>

        </div>
    );
};

export default Skill;