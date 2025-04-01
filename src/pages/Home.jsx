import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { BiCheckCircle } from "react-icons/bi";

function Home() {
  return (
    <>
    <div className='md:w-full flex'>
      <div className='md:w-1/2 sm:w-full bg-blue-950 p-20'>
        <div>
          <h2 className='text-4xl font-bold text-white'>Get More Done with whitespace</h2>
        </div>
        <br/>
        <div>
          <p className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
        </div>
        <br/>
        <div>
          <button className='p-4 bg-blue-400 rounded-md text-white flex items-center '>Try whitespace free <FaArrowRightLong className='ml-2' /></button>
        </div>
      </div>
      <div className='md:w-1/2 bg-blue-950 p-20'>
      <div>
        <div className='bg-sky-300 p-40  flex '></div>
      </div>
      </div>
      </div>
      <div className='w-full flex bg-white p-20'>
        <div className='bg-sky-300 p-20 md:w-1/2'>

        </div>
        <div className='md:w-1/2 p-20'>
           <h2 className='text-black text-4xl font-bold'>Customise it
           to your needs</h2>
           <p className='mt-5'>Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
           <button className='bg-blue-400 p-4 flex items-center mt-5 rounded-md text-white'>Let's Go <FaArrowRightLong className='ml-2' /></button>
        </div>
      </div>
     <div className='p-20 w-full'>
         <h2 className='text-center text-5xl font-bold '>Choose Your Plan</h2>
         <p className='text-center mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur porro quam reiciendis sequi libero, illo facilis non quisquam assumenda possimus,</p>
         <div className="lg:flex lg:gap-5 pt-9 ">
        <div className="lg:pt-2 pt-7 rounded-md  border-4 md:w-1/3 p-5 border-orange-300">
          <h3 className=" font-medium text-xl">Free</h3>
          <br/>
            <span className='font-bold text-2xl'>$0</span>
            <br/><br/>
            <p>Capture ideas and find them quickley</p>
            <br/>
            <ul className='space-y-3 '>
              <li className='flex gap-2'><BiCheckCircle className='size-7 fill-orange-600'  />Synec unlimited device</li>
              <li className='flex gap-2'><BiCheckCircle className='size-7 fill-orange-600' />10GB monthly upload</li>
              <li className='flex gap-2'><BiCheckCircle className='size-7 fill-orange-600' />200MB Max. note size</li>
              <li className='flex gap-2'><BiCheckCircle className='size-9 fill-orange-600' />Customize Home dashboard and access extra widgets</li>
              <li className='flex gap-2'><BiCheckCircle className='size-7 fill-orange-600' />Connect primary Google Calendar account
              </li>
              <li className='flex gap-2'><BiCheckCircle className='size-9 fill-orange-600' />Add due dates, reminders, and notifications to your tasks
              </li>
            </ul>
            <br/>
            <button className='p-4 text-black bg-white border-4 border-orange-300 rounded-md '>Get Started</button>
        </div>
        <div className="lg:pt-2 pt-7 rounded-md md:w-1/3 p-5  bg-blue-900 text-white">
          <h3 className=" font-medium text-xl">Personal</h3>
          <br/>
          <span className='font-bold text-2xl text-yellow-200'>$11.99</span>
            <br/><br/>
            <p>Keep Home and family on track</p>
            <br/>
            <ul className='space-y-3'>
              <li className='flex gap-2'><BiCheckCircle className='size-7 fill-yellow-200'  />Synec unlimited device</li>
              <li className='flex gap-2'><BiCheckCircle className='size-7 fill-yellow-200' />10GB monthly upload</li>
              <li className='flex gap-2'><BiCheckCircle className='size-7 fill-yellow-200' />200MB Max. note size</li>
              <li className='flex gap-2'><BiCheckCircle className='size-9 fill-yellow-200' />Customize Home dashboard and access extra widgets</li>
              <li className='flex gap-2'><BiCheckCircle className='size-7 fill-yellow-200' />Connect primary Google Calendar account
              </li>
              <li className='flex gap-2'><BiCheckCircle className='size-9 fill-yellow-200' />Add due dates, reminders, and notifications to your tasks
              </li>
            </ul>
            <br/>
            <button className='p-4 bg-blue-400 rounded-md text-white '>Get Started</button>
        </div>
        <div className="lg:pt-2 pt-7 rounded-md border-4 md:w-1/3 p-5 border-orange-300">
          <h3 className=" font-medium text-xl">Organization</h3>
          
          <br/>
            <span className='font-bold text-2xl'>$49.99</span>
            <br/><br/>
            <p>Capture ideas and find them quickley</p>
            <br/>
            <ul className='space-y-3'>
              <li className='flex gap-2'><BiCheckCircle className='size-7 fill-orange-600'  />Synec unlimited device</li>
              <li className='flex gap-2'><BiCheckCircle className='size-7 fill-orange-600' />10GB monthly upload</li>
              <li className='flex gap-2'><BiCheckCircle className='size-7 fill-orange-600' />200MB Max. note size</li>
              <li className='flex gap-2'><BiCheckCircle className='size-9 fill-orange-600' />Customize Home dashboard and access extra widgets</li>
              <li className='flex gap-2'><BiCheckCircle className='size-7 fill-orange-600' />Connect primary Google Calendar account
              </li>
              <li className='flex gap-2'><BiCheckCircle className='size-9 fill-orange-600' />Add due dates, reminders, and notifications to your tasks
              </li>
            </ul>
            <br/>
            <button className='p-4 text-black bg-white border-4 border-orange-300 rounded-md '>Get Started</button>
        </div>
      </div>
     </div>
   </>   
  )
}

export default Home