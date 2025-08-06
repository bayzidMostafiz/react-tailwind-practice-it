import React from 'react'
const servData = [
  {
    id : 1,
    name: "Website Development",
    details: "Our website development services combine creativity with functionality to deliver custom websites that drive engagement and enhance user experience.",
    icon: "https://techsolutionsplex.com/wp-content/uploads/2024/11/icon_02_services_Home01-e1644481757518.png"
  },
  {
    id : 2,
    name: "Digital Maketing",
    details: "Our digital marketing services are designed to boost your online presence through targeted strategies in SEO, social media, and paid advertising.",
    icon: "https://techsolutionsplex.com/wp-content/uploads/2024/11/icon_02_solution_Home01.png"
  },
  {
    id : 3,
    name: "Software Development",
    details: "Our software development services focus on creating custom, scalable solutions that streamline operations and improve business efficiency.",
    icon: "https://techsolutionsplex.com/wp-content/uploads/2024/11/icon_03_services_Home01-e1644481815625.png"
  },
]
const Services = () => {
  return (
    <div>
      
        <div className='xl:max-w-screen-xl mx-auto px-4'>
            <div className='p-10 shadow-2xl rounded-2xl max-w-screen-lg mx-auto z-10'>
                <h4 className='uppercase text-2xl text-center font-bold text-sky-400'>great journey for it solutions</h4>
                <h2 className='text-gray-900 xl:text-4xl font-extrabold text-2xl font-Oswald text-center'>Our Core Services</h2>
            
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-4'>
              {
                servData.map( (service, index) => (
                  <div key={index} className='shadow-2xl p-6 sm:p-8 rounded flex hover:border-4 transition-all delay-75 transform cursor-pointer border-4 border-transparent hover:border-sky-600'>

                    <div className='w-2/10'><img src={service.icon} alt="Icons"  /></div>
                    <div className='w-8/10 pl-2'>
                      
                      <h2 className='text-2xl font-bold font-Oswald lg:text-3xl mb-3 '>{service.name}</h2>
                      <p className='text-base font-Roboto lg:text-lg  text-justify'>{service.details}</p>
                    
                    </div>
                  
                  </div>
                ))
              }
            </div>
        </div>
      
    </div>
  )
}

export default Services
