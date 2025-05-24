import React from 'react';


const About = () => {
    return (
        <div id='about' className=' '>
            <h2 className='pt-10 text-2xl md:text-4xl text-orange-500 font-bold text-center'>About Me </h2>
            <div className='flex flex-col-reverse md:flex-row justify-between  w-10/12 mx-auto'>
               <div className="mt-10 mb-4 flex justify-center">
 <div className="mt-10 mb-4 flex justify-center">
  <div className="w-72 h-60 p-[4px] bg-gradient-to-tr from-[#2cbada] via-[#026788] to-[#0F172A] rounded-[16px]">
    <img
      className="w-full h-full object-cover rounded-[16px] border-4 border-[#0F172A]"
      src="https://i.ibb.co/pjBB21tt/Whats-App-Image-2025-05-24-at-19-30-09-bd0aee10.png"
      alt="Mehedi Hasan"
    />
  </div>
</div>
</div>

                <div className='mt-20 w-8/12 mx-auto'>
                    <p className='text-white text-start'><span  className='text-3xl font-semibold'>Hi</span>, I am Md. <span className='text-orange-500 text-xl font-extrabold '>Mehedi Hasan</span> , a
                        passionate frontend developer with a
                        love for creating visually appealing
                        and user-friendly web experiences.
                        With a strong foundation in <span className='text-orange-500 text-xl'>HTML,
                        CSS, Tailwind css, JavaScript, React, Vite, 
                        nodeJs, expressJs,
                        Firebase, mongodb, GitHub, </span>I specialize in
                        building responsive websites that not only
                        look great but also provide a seamless user experience.
                        Over the years, I've honed my skills by working on a variety
                        of projects, from simple landing pages to complex web
                        applications. My goal is to turn creative ideas into functional,
                        engaging digital products. When I'm not coding, I enjoy staying
                        up-to-date with the latest web development trends and continuously
                        learning new technologies
                        to keep my skills sharp. Let's connect and create
                        amazing together!</p>

                    <div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default About;