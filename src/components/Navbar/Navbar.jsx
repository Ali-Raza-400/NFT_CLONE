import React, {useState} from 'react';

import ME from '../../assets/pic1.png'
import './Navbar.css'
import Logo from '../../assets/yellow.png'
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import {Link} from 'react-router-dom'

import {AiOutlineMenu} from 'react-icons/ai';
// import MainDrawer from '../Drawer';

<link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.7/dist/flowbite.min.css" />
function Navbar(props) {
  const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

  return (
    <div >

      <nav className=" border-gray-200 px-2 sm:px-4 py-2.5 rounded  shadow">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </Link>
          <div className="flex md:order-2">
            <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"><Link to="/connectwallet">Collect Wallet</Link></button>
            <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"><Link to="/listnftstep3">List NFT</Link></button>
            <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"><Link to="/">Go Back</Link></button>
            <button type="button" onClick={props.toggleDrawer} className="text-blue-700 hover:text-white border
             border-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300 
             font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500
              dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600
               dark:focus:ring-blue-800"><AiOutlineMenu/></button>

            <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}

          
        </div>
          </div>
          <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">

          </div>
        </div>
        <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-2/3 px-8'}>
          {/* <MainDrawer/> */}

        <div className='flex flex-col my-4'>
            <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
            <button className='px-8 py-3'>Sign Up</button>
        </div>
      </ul>
      </nav>

      <img className='c1 ' src={ME} alt="" />

    </div>
  )
}

export default Navbar