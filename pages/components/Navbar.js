import React, {useState, Fragment} from 'react';
import { easeOut, motion } from 'framer-motion';
import Link from 'next/link';
import {  FiMenu } from 'react-icons/fi';
import { AiFillCloseCircle } from "react-icons/ai";
import {Transition, Dialog} from "@headlessui/react";



const Navbar = () => {
    const [open, setOpen] = useState(false)
  return (<> 
    <section className='text-white w-screen min-w-fit flex-nowrap flex md:px-16 px-4  justify-between flex-col'>
        {/* Navbar Animates into View */}
            <motion.nav
            initial={{y:-100}}
            animate={{y: 0}}
            transition={{delay: 0.5, duration:2, ease:"easeOut"}}
            className='w-full flex justify-between'>
                
                <div className='basis-1/4 mr-4 p-4 text-start md:text-lg align-middle '>
                    <span className="sr-only">Your Company</span><Link href="/" className='font-inter text-xl font-bold '>Ese Monday. </Link>
                </div>
                <div className='w-full hidden md:flex justify-between'>
                    <div className='basis-3/4 flex justify-center text-btext p-2'>
                        <div className='mr-2 p-2 align-middle '>
                            <Link href="/Aboutme" className='font-medium text-sm font-outfit' >About</Link>
                        </div>
                        <div className='p-2 align-middle'>
                            <Link href="/Contact" className='text-sm font-outfit font-medium' >Contact</Link>
                        </div>
                        <div className='p-2 align-middle'>
                            <Link href="https://ese-monday.hashnode.dev/" target="_blank" className='text-sm font-outfit hover:text-purple-200/40 font-medium' >Blog Posts</Link>
                        </div>
                    </div>
                    <div className='basis-1/4 p-2 text-center justify-end flex'>
                        <button type='button' className=' border-none bg-purple-500 hover:bg-purple-700 rounded-lg  text-xs px-2  font-outfit'>Get in touch</button>
                    </div>
                </div>
                <div className='p-4  md:hidden ' ><button type='button' className='text-xs font-bold -m-2.5 inline-flex items-center justify-center rounded-md  p-2.5' onClick={() => setOpen(true)}><FiMenu className='h-6 w-6' /></button></div>  
            </motion.nav>    
          <Transition
                show={open}
                enter="transition duration-[300ms] ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0">
            <Dialog as='div' open={open} onClose={setOpen}>
            <Dialog.Panel className="fixed inset-0 z-10  px-6 py-6  md:hidden">
                <div className='p-4 flex justify-end'>
                    <button type='button'className='text-2xl font-bold -m-2.5 inline-flex items-center justify-center rounded-md text-white  p-2.5' onClick={() => setOpen(false)}> <AiFillCloseCircle className='h-8 w-8' />
                     </button>
                </div>
                <div className='flex flex-col mt-20 text-white'  onClick={() => setOpen(false)}>
                    <div className='text-center p-2'><Link className='p-2 text-xl font-bold' href="/Aboutme"  >About Me</Link></div>
                    <div className='text-center p-2'><Link className='p-2 text-xl font-bold' href="/Contact">Contact</Link></div>
                </div>
                
            </Dialog.Panel>

        </Dialog>
        </Transition> 
    </section>
    </>
  )
}

export default Navbar
