import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Icon = () => {
    return (
        <div className='flex gap-3 '>
           <a href="https://github.com/mehedihasan1337"> <FaGithub className='border border-sky-500 text-3xl hover:text-4xl text-sky-700 p-1 rounded-md' /></a>
            <a href="https://www.instagram.com/mehedi__1337"><FaInstagram className='border border-sky-500 hover:text-4xl text-3xl text-sky-700 p-1 rounded-md' /></a>
            <a href="https://www.facebook.com/md.mehedi.hasan.515962"><BsFacebook className='border border-sky-500 hover:text-4xl text-3xl text-sky-700 p-1 rounded-md' /></a>
           <a href="https://x.com/MdMehediHaasan"> <FaXTwitter className='border border-sky-500 text-3xl text-sky-700 hover:text-4xl p-1 rounded-md' /></a>
<a href="https://www.linkedin.com/in/md-mehedi-hasan-794b45344"> <FaLinkedinIn className='border border-sky-500 text-3xl hover:text-4xl text-sky-700 p-1 rounded-md' />
</a>
        </div>
    );
};

export default Icon;