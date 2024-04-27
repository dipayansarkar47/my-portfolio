import React, { useEffect } from 'react'
import NextJS from '../assets/experience/next.jpg'

import node from '../assets/experience/node.png'
import Supabase from '../assets/experience/supabase.png'
import Docker from '../assets/experience/docker.png'
import react from '../assets/experience/react.png'
import tailwind from '../assets/experience/tailwind.png'
import python from '../assets/experience/python.png'
import AWS from '../assets/experience/aws.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Experience = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    })

    const techs = () => [

        {
            id: 1,
            scr: NextJS,
            title: 'NextJS',
            style: 'shadow-gray-600'
        },
        {
            id: 2,
            scr: react,
            title: 'ReactJS',
            style: 'shadow-blue-600'
        },
        {
            id: 3,
            scr: tailwind,
            title: 'Tailwind CSS',
            style: 'shadow-sky-500'
        },
        {
            id: 4,
            scr: node,
            title: 'Node JS',
            style: 'shadow-green-500'
        },
        {
            id: 5,
            scr: Supabase,
            title: 'Supabase',
            style: 'shadow-cyan-800'
        },
        {
            id: 6,
            scr: Docker,
            title: 'Docker',
            style: 'shadow-yellow-800'
        },
        {
            id: 7,
            scr: python,
            title: 'Python',
            style: 'shadow-blue-400'
        },
        {
            id: 8,
            scr: AWS,
            title: 'AWS',
            style: 'shadow-blue-400'
        }
    ]

    return (
        <div name="skills" className='bg-gradient-to-b from-gray-800 to-black text-white
     w-full h-full'>
            <div className='max-w-screen-lg max-h-screen-lg p-4 mx-auto flex flex-col justify-center w-full '>
                <div className='pb-8 mt-16 w-full flex flex-col justify-center items-center mx-auto'>
                    <h3 className='text-4xl pb-2 font-bold inline border-b-4 border-gray-400'>Technical Skills</h3>
                </div>

                <div className='w-full h-full grid grid-cols-2 text-center sm:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        techs().map(({ id, scr, title, style }) => (

                            <div data-aos="zoom-in" data-aos-duration="500" key={id} className={`flex flex-col justify-between items-center shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={scr} alt="" className='w-20 mx-auto pt-2' />
                                <p className='my-3'>{title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience