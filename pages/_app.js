import '@/styles/globals.css';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { Navbar , Footer} from './components';


// const Loading = () =>{
//   const router = useRouter()
//   const [loading, setLoading] = useState(false)
//   useEffect(()=>{
//     const handleStart = (url)=>(url !== router.asPath) && setLoading(true);
//     const handleComplete = (url)=>(url === router.asPath) && setTimeout(()=>{setLoading(false)}, 5000) ;
//     router.events.on('routeChangeStart', handleStart)
//     router.events.on('routeChangeComplete', handleComplete)
//     router.events.on('routeChangeError', handleComplete)

//     return() =>{
//       router.events.off('routeChangeStart', handleStart)
//       router.events.off('routeChangeComplete', handleComplete)
//       router.events.off('routeChangeError', handleComplete)
//     }
//   })
//   return loading &&(
//     <div className='spinner-wrapper'>
//       <div className='spinner'></div>
//     </div>
//   )

// }

export default function App({ Component, pageProps }) {
  const router = useRouter()
  return(
  <AnimatePresence >
    <motion.div
      // key={router.route}
      // intial="pageInitial"
      // animate="pageAnimate"
      // exit="pageExit"
      // transition={{
      //   duration: 3
      // }}
      // variants = {{
      //   pageInitial:{
      //     opacity: 0
      //   },
      //   pageAnimate:{
      //     opacity: 1
      //   },
      //   pageExit: {
      //     opacity: 0
      //   }
      // }}
    >
      
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      </motion.div>
    
  </AnimatePresence>) 
}
