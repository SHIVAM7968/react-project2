import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import img4 from '../assets/image4.jpg'
function Section2() {
  return (
    <>
        <div className='md:w-full flex md:p-20 bg-white gap-2'>
                <div className='  md:w-1/2 '>
                   <img src={img4} alt='{img4} 'className='md:h-[100%] w-[100%]'/>
                </div>
                <div className='md:w-1/2 md:p-20'>
                   <h2 className='text-black text-4xl font-bold shadow-md shadow-yellow-400 rounded-md'>Customise it
                   to your needs</h2>
                   <p className='mt-5'>Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
                   <button className='bg-blue-400 p-4 flex items-center mt-5 rounded-md text-white'>Let's Go <FaArrowRightLong className='ml-2' /></button>
                </div>
              </div>



    </>
  )
}

export default Section2