import Link from 'next/link';
import React from 'react';
import {SiHashnode, SiGithub, SiLinkedin,SiTwitter, SiNotion} from 'react-icons/si'

const Footer = () => {
  return (
    <div className='w-screen   min-w-full md:px-16 px-4 py-2 '>
      <div className='w-full  h-full'>
        <div className='border-b-2 p-4 border-btext/25 '>
          <div className='flex justify-center text-btext gap-4'>
            <span className=''><Link href="/"><SiTwitter /></Link></span>
            <span  className=''><Link href="/"><SiLinkedin /></Link></span>
            <span  className=''><Link href="/"><SiGithub /></Link></span>
            <span><Link href="/"><SiHashnode/></Link></span>
          </div>
          <div className='p-2 mt-4'>
          <p className='text-btext text-center text-sm font-outfit'>Let's talk about that next project. Send an email to mondayese8@gmail.com 💖.</p> 
          </div>
        </div>
        <div className='p-4 text-btext flex text-sm font-outfit justify-center gap-4 border-b-2 border-btext/25'>
          <span><Link href="/AboutMe">About</Link></span>
          <span><Link href="/">Notion</Link></span>
          <span><Link href="/">Hashnode</Link></span>
        </div>
        <div className='flex justify-between p-2 mt-8 text-white/60'>
          <h4 className='bg-transparent text-btext text-sm font-outfit '>&#64; 2023</h4>
          <h4 className='text-inter text-sm font-semibold'>Ese Monday.</h4>
        </div>
      </div>
    </div>
  )
}

export default Footer