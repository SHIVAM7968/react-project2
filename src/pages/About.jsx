import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import logo1 from '../assets/apple.png';
import logo2 from '../assets/microsoft.png';
import logo3 from '../assets/slack.png';
import logo4 from '../assets/google.png';
function About() {
  return (
    <>
    <div className='bg-blue-800 md:w-full text-center md:p-20'>
      <h2 className='font-bold  text-white text-5xl'>Your work, everywhere you are</h2>
      <br/>
      <p className=' text-white '>Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
     <br/>
     <div className='md:flex justify-center'>
      <button className='px-6 py-4 text-white  bg-blue-400 rounded-md flex text-center'>Try Taskey<FaArrowRightLong className='m-1' /></button>
     </div>
    </div>
    <div className='bg-white md:p-20 md:w-full text-center'>
    <h2 className='font-bold text-5xl'>Our sponsors</h2>
    <div className='md:flex w-full  gap-40 justify-center md:pt-10'>
       <img src={logo1} alt='{logo1}' className='size-28'/>
       <img src={logo2} alt='{logo2}'className='size-28'/>
       <img src={logo3} alt='{logo3}'className='size-28'/>
       <img src={logo4} alt='{logo4}'className='size-28'/>
    </div>
    </div>
    </>
  )
}

export default About