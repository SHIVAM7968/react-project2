import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import logo from '../assets/iconimg1.png';
function Blog() {
  return (
    <>
     <div className='md:w-full md:flex bg-blue-950 md:p-20 gap-5'>
                       <div className='  md:w-1/2'>
                         <img src={logo} alt='{logo}'className='md:h-[80%] w-[80%] md:mt-10'/>
                        </div>
                       <div className='md:w-1/2 '>
                       
                          <h2 className=' text-5xl font-bold text-white md:mt-10'>Work with Your Favorite Apps Using whitepace</h2>
                          <p className='mt-10 text-white'>Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.</p>
                          <button className='bg-blue-400 p-4 flex items-center mt-10 rounded-md text-white'>Read more <FaArrowRightLong className='ml-2' /></button>
                       </div>
                      
                     </div>
    </>
  )
}

export default Blog