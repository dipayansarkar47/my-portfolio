import React from 'react'
import Dp from "../assets/dp.jpeg"
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center
                            justify-center h-full px-4 md:flex-row text-white'>
                <div className='flex flex-col justify-center h-full'>
                    <div>
                        <img src={Dp} alt="my profile" className='rounded-2xl w-1/3 md:w-1/3 lg:w-1/5 my-5 hover:scale-105 duration-300 sm:ease-in' />
                    </div>
                            <h2 className='text-4xl sm:text-6xl font-bold text-white'>Dipayan | <span className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black'>Full-Stack Developer</span></h2>
                            <p className='text-gray-400 py-4 max-w-md w-full'>
                                I'm a B.Tech 3rd year Student of Ramkrishna Mahato Government Engineering College, Purulia with the knowledge of DSA & Development in React, Flutter, Node.js, Github, MongoDB, MySQL & much more...
                            </p>
                            <p className='text-gray-400 py-4 max-w-md'>
                                Co-Lead GDSC RKMGEC, Creator @codewithbiki, Google Cloud Facilitator, In-Charge E-Cell RKMGEC...
                            </p>

                    <div>
                        <Link to="projects" smooth duration={500} className='group rounded bg-gradient-to-b from-cyan-500 to-blue-500 w-1/3 h-8 flex items-center justify-center cursor-pointer mt-5' >Portfolio

                            <span className='px-2 group-hover:rotate-90 duration-300'>
                                <MdOutlineArrowRightAlt size={25} />
                            </span>
                        </Link>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Home