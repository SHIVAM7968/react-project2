import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import logo from '../assets/clientimg.jpg'
function Contact() {
  return (
    <>
   <div className='md:w-full flex bg-white md:p-20'>
     <div className="lg:pt-2 pt-7 rounded-md  border md:w-1/3 p-5 border-orange-300">
        <div className=''>
        <FaQuoteLeft className='size-14 fill-blue-950' />
        </div>
        <p className='md:mt-5 '>Whitepate is designed as a collaboration tool for businesses that is a full project management solution.</p>          
        <hr className='border-4 md:mt-5'></hr>
        <div className="overflow-hidden rounded-full w-20 h-20 bg-gray-50 border border-gray-200 md:mt-5">
                   <img src={logo} alt='{logo}' className='w-20 h-20'/>     
                    
         </div>
 
      </div>
   </div>
    </>
  )
}

export default Contact