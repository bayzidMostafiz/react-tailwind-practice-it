import banner from '../assets/Banner.jpg'
const Banner = () => {
  return (
    <div>
        
      <div className=" bg-cover relative bg-center h-screen  bg-[url('/Banner.jpg')]">
        <div className=" absolute inset-0 bg-black/80 flex justify-center items-center flex-col">

            <div  className='max-w-screen-xl mx-auto items-center flex flex-col gap-3 md:gap-7'>
            
                <p className="text-white bg-amber-300 inline-block px-5 py-2  
                rounded-xl uppercase font-extrabold text-sm">Techsolutions Plex LTD.</p>

                <h1 className='font-Oswald sm:text-6xl  text-white text-4xl lg:text-7xl xl:text-8xl text-center font-extrabold not-italic tracking-tight'>Total IT Solutions For All</h1>
                <p className='text-center text-white max-w-11/12 font-Roboto text-base lg:text-lg'>Techsolutions Plex LTD. is an IT & ITES service provider company dedicated to provide innovative technology solutions tailored to meet the unique needs of businesses in today’s fast-paced digital world. With a team of highly skilled professionals, the company specializes in a wide range of services, including software development, Website Development, Printing Solutions and digital marketing.</p>

                <div className='gap-3 md:gap-5 flex'>
                    <button className='px-6 py-2 bg-blue-500 rounded '><a href="#" className='text-base font-bold font-Roboto'>Service</a></button>
                    <button className='px-6 py-2 bg-white rounded '><a href="#" className='text-base font-bold font-Roboto'>Contact Us</a></button>
                </div>


            </div>
        
        
        </div>
        
        
      </div>
    </div>
  )
}

export default Banner
