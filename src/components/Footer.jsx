import React from 'react'
import { GrApple } from "react-icons/gr";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { DiAndroid } from "react-icons/di";
import { IoIosSnow } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoGlobeOutline } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
function Footer() {
  return (
           
     
      <div className='md:w-full flex md:block '>
        <div className='bg-blue-950  p-28'>
            <h2 className='text-center text-5xl text-white font-bold'>Try Whitespace today</h2>
            <div className='mt-5'><p className='text-center  text-white text-2xl'>Get started for free.
            Add your whole team as your needs grow.</p></div>
            <div className='flex  justify-center items-center mt-5'>
              <button className='p-4 bg-blue-400 rounded-md text-white flex items-center  '>Try Tashkey free<FaArrowRightLong className='ml-2' /></button>
            </div>
            <div className='mt-5 '>
             <p className='text-center text-white text-2xl'>On a big team? Contact sales</p>
            </div>
            <div className='flex mt-5 justify-center items-center gap-5'>
            <GrApple className='fill-white size-20' />
            <TfiMicrosoftAlt className='fill-white size-20' />
            <DiAndroid className='fill-white size-20'/>
            </div>
            <div className=' flex mt-20'>
              <div>
                    <a href="" className="flex">
                      <IoIosSnow className='size-10 fill-white' />
                     <h2 className='text-2xl font-semibold text-white'>Whitespace</h2>      
                    </a>
                    <p className='text-white text-1xl'>whitepace was created for the new ways we live and work. We make a better workspace around the world.</p>
              </div>
              <div className='pl-24'>
                <div className='space-y-3'>
                  <h2 className='text-white font-bold text-1xl'>Product</h2>
                  <h2 className='text-white text-1xl font-thin hover:text-orange-400'>Overview</h2>
                  <h2 className='text-white text-1xl font-thin hover:text-orange-400'>Pricing</h2>
                  <h2 className='text-white text-1xl font-thin hover:text-orange-400'>Customer Stories</h2>
                </div>
              </div>
              <div className='pl-24'>
                <div className='space-y-3'>
                  <h2 className='text-white font-bold text-1xl'>Resources</h2>
                  <h2 className='text-white text-1xl font-thin hover:text-orange-400'>Blog</h2>
                  <h2 className='text-white text-1xl font-thin hover:text-orange-400'>Guides & tutorials</h2>
                  <h2 className='text-white text-1xl font-thin hover:text-orange-400'>Help center</h2>
                </div>
              </div>
              <div className='pl-24'>
                <div className='space-y-3'>
                  <h2 className='text-white font-bold text-1xl'>Company</h2>
                  <h2 className='text-white text-1xl font-thin hover:text-orange-400'>About us</h2>
                  <h2 className='text-white text-1xl font-thin hover:text-orange-400'>Careers
                  </h2>
                  <h2 className='text-white text-1xl font-thin hover:text-orange-400'>Media kit</h2>
                </div>
              </div>
              <div className='pl-24'>
                <div className='space-y-3'>
                  <h2 className='text-white font-bold text-2xl'>Try It Today</h2>
                  <p className='text-white '>Get started for free.
                  Add your whole team as your needs grow.</p>
                  
                  <button className='p-4 bg-blue-400 rounded-md text-white flex items-center'>Start today <FaArrowRightLong className='ml-2' /></button>
                  
               </div>
              </div>
               
            </div>
           <hr className='border-gray-700 mt-20'/>
           <div className='flex mt-20 justify-center items-center gap-5'>
           <label> <IoGlobeOutline className='fill-white size-5' /> </label>
            <select id="dropdown">
            <option value="" disabled selected>Select an option</option>
            <option value="option1" id='dropdown'>ENGLISH</option>
            <option value="option2">GUJARATI</option>
            <option value="option3">HINDI</option>
            <option value="option3">TAMIL</option>
            <option value="option3">TELUGU</option>
            </select>
            <h2 className='text-white '>Terms & privacy</h2>
            <h2 className='text-white '>Security</h2>
            <h2 className='text-white '>Status</h2>
            <h2 className='text-white flex '><FaRegCopyright className='size-5 ' />2021 whitepace LLC</h2>

            <div className=' flex gap-5'>
              <h2 className='text-white '><FaFacebookF /></h2>
              <h2 className='text-white '><FaTwitter /></h2>
              <h2 className='text-white '><FaLinkedinIn /></h2>
            </div>
          
           </div>
          
        </div>
        
      </div>
  )
}

export default Footer