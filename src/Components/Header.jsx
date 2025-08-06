import logo from '../assets/logo_with_name.png';
import menuIcon from '../assets/menu.png';

const Header = () => {
  return (
    <div className='w-full max-h-36 bg-blue-300 xl:h-24 items-center flex p-5'>
      <header className=' w-full lg:max-w-screen-lg xl:max-w-screen-xl mx-auto flex'>

        <div className='w-1/2 '>
            <a href=""><img src={logo} alt="Logo" className='w-50'/></a>
        </div>

        <nav className='w-1/2 flex justify-end items-center'>
            <div className='block md:hidden'><a href="#"><img src={menuIcon} alt="" className='h-5 w-5 sm:w-8 sm:h-8 '/></a></div>
            <div className='hidden md:block'>
            <ul className='flex gap-5 font-bold text-base'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
