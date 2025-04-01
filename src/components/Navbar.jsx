import React, { useState } from 'react'
import { IoIosSnow } from "react-icons/io";
import { NavLink } from 'react-router-dom';
function Navbar() {
 
    const [nav,setNav] = useState();
    


  return (
    <>
<header class=" text-white md:full flex   bg-blue-950 w-full ">
  <div class="container mx-auto flex items-center h-24 ">
    <a href="" className="flex items-center justify-center">
    <IoIosSnow className='size-10 ' />
     <h2 className='text-2xl font-semibold'>Whitespace</h2>      
    </a>
    <nav class="contents  text-[15px]  ">
      <ul class="mx-auto flex items-center ">
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
      <div className='md:flex  space-x-5 sm:hidden'>
    <button className="border rounded-md bg-yellow-200 text-black font-bold px-8 py-3 ">Log in</button>
   
    <button className="border rounded-md bg-blue-500 text-white font-bold px-6 py-3">Try Whitespace </button>
    
   </div>
   
    </nav>
    
   
  </div>
</header>

    </>
    
  )
}

export default Navbar