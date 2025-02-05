import React from 'react';
import 'animate.css';
const MyProjects = () => {
    return (
        <div id='projects' className='w-10/12 mx-auto'>
            <h2 className='pt-10  text-2xl md:text-4xl mb-10 text-orange-500 font-bold text-center'>My Projects </h2>

            <div className='mb-4 grid grid-cols-1 gap-3 lg:grid-cols-3 animate__animated animate__fadeInDown animate__slower '>
                {/* 1 */}
                <div className='md:w-96 w border text-white bg-black px-3 text-center'>
                    <img className='w-80 w-80 h-44  mx-auto mt-2' src="https://i.ibb.co.com/RyVSqvD/Screenshot-2025-01-04-220525.png" alt="" />


                    <h3 className='uppercase mt-1 text-orange-500'>html <span
                        className='text-white'>|</span> css  <span className='text-white'>|</span> tailwind css  <span className='text-white'>|</span> js </h3>

                    <h4>Project Name : <span className='uppercase'>Animal donatin</span></h4>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className='border my-3  hover:bg-orange-500 rounded-sm border-orange-500 px-1 ' onClick={() => document.getElementById('my_modal_5').showModal()}>details</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box w-6/12 bg-gradient-to-br text-start from-gray-950 from-10%  to-sky-900 to-0%..">
                            <img src="https://i.ibb.co.com/RyVSqvD/Screenshot-2025-01-04-220525.png" alt="" />

                            <h3 className='uppercase mt-1 text-orange-500'>html <span
                                className='text-white'>|</span> css  <span className='text-white'>|</span> tailwind css  <span className='text-white'>|</span> js </h3>

                            <h4>Project Name : <span className='uppercase'>Animal donatin</span></h4>
                            <p className="py-4">Description : This is a pet adoption website here I am using HTML, CSS, tailwind css, js .This page is mobile computer and tab-responsive.</p>

                            <a className='border  rounded-md border-orange-600 p-2  font-semibold bg-orange-500 text-white flex items-center gap-1' href="https://github.com/mehedihasan1337/pet-animal6"> View repository </a>
                            <a className='border mt-2 rounded-md border-orange-600 p-2  font-semibold bg-orange-500 text-white flex items-center gap-1' href="https://mehedihasan1337.github.io/pet-animal6"> View WebSite </a>


                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>

                </div>

                {/* 2 */}
                <div className='md:w-96 w border text-white bg-black px-3 text-center'>
                    <img className='w-80 w-80 h-44  mx-auto mt-2' src="https://i.ibb.co.com/v4M3B3w/Screenshot-2025-01-05-001257.png" alt="" />


                    <h3 className='uppercase mt-1 text-orange-500'>html <span
                        className='text-white'>|</span> css  <span className='text-white'>|</span> tailwind css </h3>

                    <h4>Project Name : <span className='uppercase'>Tea House</span></h4>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className='border my-3  hover:bg-orange-500 rounded-sm border-orange-500 px-1 ' onClick={() => document.getElementById('my_modal_6').showModal()}>details</button>
                    <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box w-6/12 bg-gradient-to-br text-start from-gray-950 from-10%  to-sky-900 to-0%..">
                            <img src="https://i.ibb.co.com/v4M3B3w/Screenshot-2025-01-05-001257.png" alt="" />

                            <h3 className='uppercase mt-1 text-orange-500'>html <span
                                className='text-white'>|</span> css  <span className='text-white'>|</span> tailwind css </h3>

                            <h4>Project Name : <span className='uppercase'>Tea House</span></h4>
                            <p className="py-4">Description : This website is made using html, Css, tailwind css to create what kind of tea is available in a tea house. This page is mobile computer and tab-responsive.</p>

                            <a className='border  rounded-md border-orange-600 p-2  font-semibold bg-orange-500 text-white flex items-center gap-1' href="https://github.com/mehedihasan1337/tea-house"> View repository </a>
                            <a className='border mt-2 rounded-md border-orange-600 p-2  font-semibold bg-orange-500 text-white flex items-center gap-1' href="https://mehedihasan1337.github.io/tea-house"> View WebSite </a>


                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>

                </div>
                {/* 3 */}
                <div className='md:w-96 w border text-white bg-black px-3 text-center'>
                    <img className='w-80 h-44 mx-auto mt-2' src="https://i.ibb.co.com/L9cVxqq/Screenshot-2025-01-05-004204.png" alt="" />

                    <h3 className='uppercase mt-1 text-orange-500'>html <span
                        className='text-white'>|</span> css  <span className='text-white'>|</span> tailwind css <span className='text-white'> |</span> js <span className='text-white'> |</span> react <span className='text-white'> |</span> Node.js <span className='text-white'> | </span>Express <span className='text-white'> | </span> Mongodb</h3>

                    <h4>Project Name : <span className='uppercase'>Online Tutor Booking</span></h4>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className='border my-3  hover:bg-orange-500 rounded-sm border-orange-500 px-1 ' onClick={() => document.getElementById('my_modal_3').showModal()}>details</button>
                    <dialog id="my_modal_3" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box w-6/12 bg-gradient-to-br text-start from-gray-950 from-10%  to-sky-900 to-0%..">
                            <img src="https://i.ibb.co.com/L9cVxqq/Screenshot-2025-01-05-004204.png" alt="" />

                            <h3 className='uppercase mt-1 text-orange-500'>html <span
                                className='text-white'>|</span> css  <span className='text-white'>|</span> tailwind css <span className='text-white'> |</span> js <span className='text-white'> |</span> react <span className='text-white'> |</span> Node.js <span className='text-white'> | </span>Express <span className='text-white'> | </span> Mongodb</h3>

                            <h4>Project Name : <span className='uppercase'>Online Tutor Booking</span></h4>
                            <p className="py-4">Description : This is an online tutor finding site to book tutors for teaching languages of different languages
                                This website is built with html, css,  tailwind css, js , react , Node.js, Express, Mongodb .This page is mobile computer and tab-responsive.</p>

                            <a className='border  rounded-md border-orange-600 p-2  font-semibold bg-orange-500 text-white flex items-center gap-1' href="https://github.com/programming-hero-web-course2/b10a11-client-side-mehedihasan1337"> View repository </a>
                            <a className='border mt-2 rounded-md border-orange-600 p-2  font-semibold bg-orange-500 text-white flex items-center gap-1' href="https://glittery-melomakarona-339b94.netlify.app"> View WebSite </a>


                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>

                </div>
            </div>


        </div>
    );
};

export default MyProjects;