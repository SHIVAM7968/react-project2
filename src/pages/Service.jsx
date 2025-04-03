import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import logo from '../assets/logoimg.png';
function Service() {
  return (
    <>
   <div className='md:w-full md:flex bg-white md:p-20 sm:gap-5'>
                  
                   <div className='md:w-1/2'>
                      <h2 className='text-black text-4xl font-bold shadow-md shadow-yellow-400 md:w-[70%] rounded-md'>100% your data</h2>
                      <p className='mt-5'>The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.</p>
                      <button className='bg-blue-400 p-4 flex items-center mt-5 rounded-md text-white'>Read more <FaArrowRightLong className='ml-2' /></button>
                   </div>
                   <div className='  md:w-1/2'>
                     <img src={logo} alt='{logo}'className='md:h-[80%] md:w-[80%] ' />
                   </div>
                 </div>
    </>
  )
}

export default Service