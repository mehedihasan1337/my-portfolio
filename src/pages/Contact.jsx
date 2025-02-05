import React from 'react';
import { FaPhone, FaWhatsappSquare } from 'react-icons/fa';
import { MdEmail, MdOutlinePhone } from 'react-icons/md';
import contact from '../assets/contact.json'
import Lottie from 'lottie-react';

const Contact = () => {
    return (
        <div id='contact' className='md:w-10/12  mx-auto '>
           <h2 className='pt-10 text-2xl md:text-4xl text-orange-500 font-bold text-center'>Contact Me </h2>
            <div className='flex flex-col-reverse md:flex-row justify-between  w-8/12 mx-auto'>
                <div className='mt-10 mb-4 animate__animated animate__lightSpeedInLeft animate__slower '>
                    <Lottie animationData={contact}> </Lottie>
                </div>

                <div className='mt-20 mx-auto mb-10 animate__animated animate__lightSpeedInRight animate__slower  '>
                    <p className='flex items-center gap-2  p-2 text-orange-500 rounded-md text-sm lg:text-2xl'> <MdEmail /> mdmehedihasan1337@gmail.com</p>
                    <a className='text-white ml-10 border p-1 hover:bg-orange-500' href="mailto:mdmehedihasan1337@gmail.com?subject=Test%20Subject&body=Hello,%20this%20is%20a%20test%20email.">Send Email</a>
                    <p className='flex items-center gap-2  p-2 text-orange-500 rounded-md text-sm md:text-2xl'> <FaWhatsappSquare />+880 1763-348775</p>
                    <a className='text-white ml-10 border p-1 hover:bg-orange-500' href="https://wa.me/8801763348775?text=Hello%20there!%20How%20are%20you?" target="_blank">Message on WhatsApp</a>
                    <p className='flex items-center gap-2  p-2 text-orange-500 rounded-md text-sm md:text-2xl'> <MdOutlinePhone />+880 1763-348775</p>
                    <a className='text-white  ml-10 border p-1 hover:bg-orange-500' href="tel:+880 1763-348775">Call Now</a>
                    
            

                </div>

            </div>
        </div>
    );
};

export default Contact;