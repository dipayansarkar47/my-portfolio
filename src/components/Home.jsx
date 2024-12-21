import React, { useEffect } from 'react'
import Dp from "../assets/dp.jpeg"
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-scroll'
import '../App.css'
import { HiOutlineMail } from 'react-icons/hi'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Home = () => {
    useEffect(()=> {
        AOS.init({duration: 1000})
    })
    return (
        <div name="home" className='h-auto w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center
                            justify-center  px-4 md:flex-row text-white'>
                <div className='flex flex-col justify-center items-center w-full '>
                    
                        <img src={Dp} alt="my profile" data-aos="fade-in" data-aos-duration="500" className='mt-20 rounded-full cursor-pointer shadow-[2px_2px_10px_1px_rgba(109,40,217)] w-1/3 md:w-1/3 lg:w-1/5 my-5 hover:scale-105 duration-300 sm:ease-in' />
                    
                            <h2 data-aos="fade-in" data-aos-duration="1000" className='text-4xl sm:text-6xl mb-4 font-bold text-white'>Dipayan Sarkar</h2>
                            <h3 data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="1000" className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-2xl font-black'>Data Engineer | @Curiflow</h3>
                            {/* <p data-aos="fade-in" data-aos-delay="400" data-aos-duration="2000" className='text-gray-400 py-4 max-w-md w-full'>
                                I'm a B.Tech 4th year Student of Ramkrishna Mahato Government Engineering College, Purulia. With expertise in Data Structures and Algorithms (DSA), Development in ReactJs, NodeJs, MongoDB, MySQL & much more. As a dynamic and forward-thinking programmer, I'm committed to staying up to date with the latest trends and technologies in the field.
                            </p> */}
                            {/* <p data-aos="fade-in" data-aos-delay="800" data-aos-duration="2000" className='text-gray-400 py-4 max-w-md'>
                                Co-Lead GDSC RKMGEC, Creator @codewithbiki, Google Cloud Facilitator, In-Charge E-Cell RKMGEC...
                            </p> */}
                            

                    <div className='flex flex-row justify-center items-center gap-2 w-full'>
                        <Link to="projects" smooth duration={500} data-aos="fade-up" data-aos-delay="1000" data-aos-duration="2000" className='group rounded bg-gradient-to-r from-blue-600 to-cyan-600 w-1/3 h-8 flex items-center justify-center cursor-pointer mt-5 mb-28' >Projects

                            <span className='px-2 group-hover:rotate-90 duration-300'>
                                <MdOutlineArrowRightAlt size={25} />
                            </span>
                        </Link>
                        <a target='_blank' rel="noreferrer"  href="mailto:dipayansarkar265482@gmail.com" smooth duration={500} data-aos="fade-up" data-aos-delay="1000" data-aos-duration="2000" className='group hover:scale-105 rounded w-auto h-8 p-3 flex items-center bg-gradient-to-r from-indigo-600 via-purple-600 to-orange-600 justify-center cursor-pointer mt-5 mb-28' >

                            <span className='pr-2'>
                                <HiOutlineMail size={25} />
                            </span>
                            Mail Me
                        </a>
                        <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/dipayan-sarkar-ab465b1b5/" smooth duration={500} data-aos="fade-up" data-aos-delay="1000" data-aos-duration="2000" className='group hover:scale-105 rounded w-auto h-8 px-1 flex items-center bg-none justify-center cursor-pointer mt-5 mb-28' >

                            <span >
                            <BsLinkedin size={25}></BsLinkedin>
                            </span>
                        </a>
                        <a target='_blank' rel="noreferrer" href="https://www.github.com/dipayansarkar47" smooth duration={500} data-aos="fade-up" data-aos-delay="1000" data-aos-duration="2000" className='group hover:scale-105 rounded w-auto h-8 px-1 flex items-center bg-none justify-center cursor-pointer mt-5 mb-28' >

                            <span >
                            <BsGithub size={25}></BsGithub>
                            </span>
                        </a>
                        
                    </div>

                </div>


            </div>
                
        </div>
    )
}

export default Home