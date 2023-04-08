import React,{useEffect} from 'react'
import Sandesh from '../assets/projects/sandeshh.png'
import Face from '../assets/projects/Face.png'
import Hostel from '../assets/projects/Hostel.png'
import Keeper from '../assets/projects/Keeper.png'
import Rentify from '../assets/projects/Rentify.png'
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
      demo: "https://sandeshh.netlify.app/",
      code: "https://github.com/dipayansarkar47/Sandesh"
    },
    {
      id: 2,
      src: Hostel,
      demo: "https://github.com/dipayansarkar47/hostel_management",
      code: "https://github.com/dipayansarkar47/hostel_management"
    },
    {
      id: 3,
      src: Keeper,
      demo: "https://github.com/dipayansarkar47/Todo_App",
      code: "https://github.com/dipayansarkar47/Todo_App"
    },
    {
      id: 4,
      src: Rentify,
      demo: "https://dipayansarkar47.github.io/rentify/",
      code: "https://github.com/dipayansarkar47/rentify"
    },
    {
      id: 5,
      src: Weather,
      demo: "https://dipayansarkar47.github.io/WeatherApp/",
      code: "https://github.com/dipayansarkar47/WeatherApp"
    },
    {
      id: 6,
      src: Face,
      demo: "https://github.com/dipayansarkar47/face_and_eye_detection_app",
      code: "https://github.com/dipayansarkar47/face_and_eye_detection_app"
    },
  ]


  return (
    <div name="projects" className='bg-gradient-to-b from-black to-gray-800 w-full text-white
     md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <h2 className='text-4xl font-bold inline border-b-4 border-gray-400'>Projects</h2>
          <p className='py-6'>Check out some of my work </p>
        </div>
        <div   className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {
            Projects().map(({ id, src, demo, code }) => (

              <div data-aos="fade-in" data-aos-duration="500" key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="Ai" className='rounded-md duration-200 hover:scale-105' />
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