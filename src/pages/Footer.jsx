import React from 'react';
import Icon from '../components/Icon';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer text-white footer-center bg-black p-10">
  <aside>
  
      <button className=' p-2 rounded-3xl border-sky-600 border-2 hover:bg-sky-700'><a href="#home"><FaArrowUp /></a></button>
    <p>Copyright © {new Date().getFullYear()}   |   Md Mehedi Hasan. </p>
  </aside>
  <Icon></Icon>
</footer>
    );
};

export default Footer;