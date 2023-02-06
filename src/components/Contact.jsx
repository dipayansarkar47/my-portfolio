import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-screen'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Contact Me</p>
                    <p className='mt-6'>Submit the form below to get in touch with me</p>
                </div>

                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/5169b1e4-305a-43e5-b42b-142a6f0e1e13" method="POST" className='flex flex-col w-full md:w-1/2'>
                        <input required type="text" name='name' placeholder='Enter your name' className='p-2 m-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <input required type="email" name='email' placeholder='Enter your e-mail' className='p-2 m-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <textarea name="message" required rows="10" placeholder='Enter your message' className='p-2 bg-transparent border-2 m-2 rounded-md text-white focus:outline-none'></textarea>
                        <button type="submit" className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Talk</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact