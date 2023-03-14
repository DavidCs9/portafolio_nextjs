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
        }} className=' h-screen text-white pt-60'
      >
        <div className=' text-center text-5xl bg-gradient-to-r from-rose-100 to-teal-100 bg-clip-text text-transparent'>
          <h1>DAVID CASTRO</h1>
          <h1>SOFTWARE DEVELOPER</h1>
        </div>
        <div className=' text-center pt-20 grid gap-6 w-52 m-auto'>
          <Link
            href='/asistente' className='py-2 px-4  bg-secundary hover:bg-third
          focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white
            transition ease-in duration-200 text-center text-base font-semibold shadow-md
            focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg'
          >Asistente Virtual
          </Link>
          <Link
            href='/proyectos' className='py-2 px-4  bg-secundary hover:bg-third
          focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white
            transition ease-in duration-200 text-center text-base font-semibold shadow-md
            focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg'
          >Proyectos
          </Link>
        </div>
      </motion.div>
    </>
  )
}
