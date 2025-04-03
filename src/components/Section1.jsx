import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import img2 from '../assets/image3.jpg'
function Section1() {
  return (
    <>
     <div className='md:w-full flex bg-blue-950 md:p-20 gap-2'>
           <div className='md:w-1/2 md:p-20'>
            
               <h2 className='text-4xl font-bold text-white md:mt-10'>Get More Done with whitespace</h2>
               <p className='text-white md:mt-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
               <button className='p-4 bg-blue-400 rounded-md text-white flex items-center md:mt-10'>Try whitespace free <FaArrowRightLong className='ml-2' /></button>
            
          </div>
           <div className='md:w-1/2'>
           
            <img src={img2} alt='{img2}'className='md:h-[90%] w-[100%] '/>
           </div>
     </div>
           
    </>
  )
}

export default Section1