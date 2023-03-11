'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home () {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5
        }} className='bg-black h-screen text-white pt-60'
      >
        <div className=' text-center text-5xl'>
          <h1>DAVID CASTRO</h1>
          <h1>SOFTWARE DEVELOPER</h1>
        </div>
        <div className=' text-center pt-20'>
          <Link
            href='/asistente' className='py-2 px-4  bg-indigo-600 hover:bg-indigo-700
          focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white
            transition ease-in duration-200 text-center text-base font-semibold shadow-md
            focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg'
          >David Virtual
          </Link>
        </div>
      </motion.div>
    </>
  )
}
