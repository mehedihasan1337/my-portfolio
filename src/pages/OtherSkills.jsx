import React from 'react';
import 'animate.css';

const OtherSkills = () => {
    return (
        <div id='OtherSkills' className='w-10/12 mx-auto '>
            <h2 className='pt-10 text-2xl md:text-4xl mb-10 text-orange-500 font-bold text-center'>Other Skills </h2>
            <div className='grid  grid-cols-2 sm:grid-cols-3 gap-4 text-white w-11/12  md:w-6/12 mx-auto animate__animated animate__bounce animate__infinite animate__slower '>

                <div className=' text-center w-32   bg-black p-1 rounded-md mb-3'>
                    <img className='w-16 mt-3 mx-auto ' src="https://img.icons8.com/?size=48&id=zfHRZ6i1Wg0U&format=png" alt="" />
                    <h3>Figma</h3>
                </div>
                <div className=' text-center w-32 bg-black p-1 rounded-md mb-3'>
                    <img className='w-16 mt-3 mx-auto' src="https://img.icons8.com/?size=48&id=iWw83PVcBpLw&format=png" alt="" />
                    <h3>canva</h3>
                </div>
                <div className=' text-center w-32 bg-black p-1 rounded-md mb-3'>
                    <img className='w-16 mt-3 mx-auto ' src="https://img.icons8.com/?size=80&id=ZLPzGAJtJif1&format=png" alt="" />
                    <h3>pixellab</h3>
                </div>
                


            </div>

        </div>
    );
};

export default OtherSkills;