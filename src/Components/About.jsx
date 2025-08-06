import React from 'react'
import about from '../assets/About.png'

const About = () => {
  return (
    <div>
      <div className=' xl:max-w-screen-xl mx-auto py-12 sm:py-16 md:py-20 xl:py-24 md:flex px-4 w-full '>
        <div className='md:w-4/10 w-full' >

            <p className="text-white bg-blue-500 inline-block px-5 py-2  
                rounded-xl uppercase font-extrabold text-sm">Who We Are.</p>
                <h2 className='text-gray-900 xl:text-4xl font-extrabold text-2xl font-Oswald md:my-5 my-3'>About Us</h2>
                <p className='text-base lg:text-lg font-Roboto text-justify'>Founded in 2011, TechSolutions Plex LTD. is a web and software development firm based in Bangladesh that strives to provide individualized, devoted, and customized services. After more than decades of business, we have established a reputation for dependability and integrity among our clients across a variety of industries, both domestically and globally.</p>


                <h2 className='text-gray-900 xl:text-4xl font-extrabold text-2xl font-Oswald md:my-5 my-3'>Decades Of Experience</h2>
                <p className='text-base lg:text-lg font-Roboto text-justify mb-3'>Since the beginning of our company, we have provided businesses with comprehensive technological solutions, including website building, software development, technical support, graphic design, and many more services.</p>

        </div>
        <div className='w-full md:w-6/10 justify-center md:justify-end flex pl-6'>
            <img src={about} alt="About US image" className=' w-full object-cover self-center' />
        </div>
      </div>
    </div>
  )
}

export default About
