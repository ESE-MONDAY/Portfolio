import React from 'react';
import { Navbar } from './components';

const Contact = () => {
  return (
    <div className=' w-full min-w-fit h-screen flex-nowrap flex md:px-16 px-4 justify-center'>
      <div className='p-2 flex-col  mt-16 md:mt-32 '>
        <div className='flex justify-center'>
          <h4 className='pb-8 text-purple-500 text-xl font-inter font-medium justify-center'>What's Next?</h4></div>
        
        <div className='flex justify-center'>    
        <p className='text-btext md:w-1/3 text-left font-outfit'>I am currently open to new opportunities, both remote and on-site in 
          the united kingdom as I’ll be resuming my Masters degree in September.
          My inbox and my socials are always open to collaborations and suggestions .</p></div>
     
    
      </div>
       
    </div>
  )
}

export default Contact