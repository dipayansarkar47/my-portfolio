import React,{useEffect} from 'react'
import Sandesh from '../assets/projects/sandeshh.png'
import Face from '../assets/projects/Face.png'
import Hostel from '../assets/projects/Hostel.png'
import Keeper from '../assets/projects/Keeper.png'
import ShopKaro from '../assets/projects/ShopKaro.png'
import Weather from '../assets/projects/Weather.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {
  useEffect(()=> {
    AOS.init({duration: 1000})
})

  const Projects = () => [
    {
      id: 1,
      src: Sandesh,
      desc: "Sandesh is a Chat App made using ReactJS + Tailwind CSS + ChatEngine API Service + Firebase authentication...",
      demo: "https://sandeshh.netlify.app/",
      code: "https://github.com/dipayansarkar47/Sandesh"
    },
    {
      id: 2,
      src: ShopKaro,
      desc: "This Full-Stack ShopKaro e-commerce website is made using ReactJS, Tailwind CSS, NodeJS, MongoDB....",
      demo: "https://github.com/dipayansarkar47/shopkaro",
      code: "https://github.com/dipayansarkar47/shopkaro"
    },
    {
      id: 3,
      src: Hostel,
      desc: "This android app is made using Flutter, Firebase which is a Hostel Management System for college...",
      demo: "https://github.com/dipayansarkar47/hostel_management",
      code: "https://github.com/dipayansarkar47/hostel_management"
    },
    {
      id: 4,
      src: Keeper,
      // desc: "Keeper is a simple note taking application made using Flutter...",
      demo: "https://github.com/dipayansarkar47/Todo_App",
      code: "https://github.com/dipayansarkar47/Todo_App"
    },
    {
      id: 5,
      src: Weather,
      // desc: "It is a Weather application which shows temperatures of various cities across the globe made using REST API...",
      demo: "https://dipayansarkar47.github.io/WeatherApp/",
      code: "https://github.com/dipayansarkar47/WeatherApp"
    },
    {
      id: 6,
      src: Face,
      // desc: "It is a Face-Detection application made using Python and Computer Vision...",
      demo: "https://github.com/dipayansarkar47/face_and_eye_detection_app",
      code: "https://github.com/dipayansarkar47/face_and_eye_detection_app"
    },
  ]


  return (
    <div name="projects" className='h-auto max-h-screen-lg  bg-gradient-to-b from-black to-gray-800 w-full text-white
     md:h-screen'>
      <div className='max-w-screen-lg p- mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <h2 className='text-4xl font-bold inline border-b-4 border-gray-400'>Projects</h2>
          <p className='py-6'>Check out some of my work </p>
        </div>
        <div   className='grid sm:grid-cols-2 md:grid-cols-3 mb-20 gap-8 px-12 sm:px-0'>
          {
            Projects().map(({ id, src, desc, demo, code }) => (

              <div data-aos="fade-in" data-aos-duration="500" key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="Ai" className='rounded-md duration-200 hover:scale-105' />
                <p className='p-2 text-justify font-extralight'>{desc}</p>
                <div className='flex items-center justify-center'>
                  
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-gray-700 to-blue-900 rounded-md'>
                    <a href={demo}>Demo</a>
                  </button>
                  <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-purple-900 to-gray-700 rounded-md'>
                    <a href={code}>Code</a>
                  </button>
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects