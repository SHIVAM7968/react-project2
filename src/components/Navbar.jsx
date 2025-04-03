import React, { useState } from 'react'
import { IoIosSnow } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
function Navbar() {
 
    const [nav,setNav] = useState();
    
     

  return (
    <>
<header className=" text-white md:w-full md:flex  bg-blue-950 ">
  <div className="container mx-auto flex items-center h-24 ">
    <a href="" className="flex items-center justify-center">
    <IoIosSnow className='size-10 ' />
     <h2 className='text-2xl font-semibold'>Whitespace</h2>      
    </a>
    <nav className="contents  text-[15px]   ">
      <ul className="mx-auto flex items-center  ">
        <NavLink to ='home' className="p-5 xl:p-8 ">
          <a href="">
            <span className='text-white'>Home</span>
          </a>
        </NavLink>
        <NavLink to='about' className="p-5 xl:p-8">
          <a href="">
            <span className='text-white'>About</span>
          </a>
        </NavLink>
        <NavLink to='service' className="p-5 xl:p-8">
          <a href="">
            <span className='text-white'>Service</span>
          </a>
        </NavLink>
        <NavLink to='blog' className="p-5 xl:p-8">
          <a href="">
            <span className='text-white'>Blog</span>
          </a>
        </NavLink>
        <NavLink to='contact' className="p-5 xl:p-8">
          <a href="">
            <span className='text-white'>Contact</span>
          </a>
        </NavLink>
      </ul>
      <div className='flex  md:w-full- space-x-5 '>
    <button className="border-none rounded-md bg-yellow-200 text-black font-bold px-8 py-3 ">Log in</button>
   
    <button className="border-none rounded-md bg-blue-500 text-white font-bold px-6 py-3 flex" >Try Whitespace<FaArrowRightLong className='ml-1 mt-1' /> </button>
    
   </div>
   
    </nav>
    
   
  </div>
</header>

    </>
    
  )
}

export default Navbar