import React from 'react';
import Link from 'next/link';



const Aboutme = () => {
  return (
    <section className='w-scren min-w-fit flex-nowrap md:px-16 px-4 py-4 overflow-hidden '>
      <div className=' w-full md:flex justify-between md:gap-4 '>
        <div className=' w-full mt-4 '>
            <h3 className='font-inter text-xl md:text-5xl p-2 text-white font-bold'>About me</h3>
            <p className='font-outfit text-btext text-xs md:text-sm leading-loose md:leading-loose p-2'>
            Ese Monday is a software engineer and tech content creator from Lagos, Nigeria. She is a freelance web3 developer and consultant, building decentralized applications that bridge the gap between web 2.0 and web 3.0 using minimalistic designs and low-code tools. <br/>Ese is passionate about building a supportive developer community and promoting inclusivity and fair opportunities for all. She achieves this by facilitating boot camps, career talk sessions, and mentorship programs. Her motto is "Pursue Excellence, and success will follow, pants down!", 
            which reflects her belief that excellence should always be the primary focus of any endeavor.
            </p>
           
        </div>
        <div className='w-full mt-4 md:mt-0 flex justify-center md:p-2'>
        <img src='https://placehold.co/600x400/000000/FFFFFF/png' />
        </div>
      </div>
      <div className='b w-full p-2 mt-20 '>
        <div className='md:flex justify-between gap-4'>
          <div><h3 className='font-inter text-xl p-2 text-white font-semibold'>My Skillset</h3></div>
          <div className='text-white p-2 basis-1/2 w-full  flex justify-between flex-wrap '>
            <div className='px-4 py-4 basis-1/3  text-xs w-full'>Technical Writing 📝</div>
            <div className='px-4 py-4 basis-1/3 text-xs w-full'>Web Design 🕸️</div>
            <div className='px-4 py-4 basis-1/3 text-xs w-full'>Web3(Blockchain)</div>
            <div className='px-4 py-4 basis-1/3 text-xs w-full'>Technical Writing 📝</div>
            <div className='px-4 py-4 basis-1/3 text-xs w-full'>Web Design 🕸️</div>
            <div className='px-4 py-4 basis-1/3 text-xs w-full'>Web3(Blockchain)</div>
          </div>
        


        </div>
          
        </div>
        <div className='text-white mt-10'>
          <p>Some technologies i have been working with recently:</p>
            <span>Reactjs</span>
        </div>

    </section>
  )
}

export default Aboutme