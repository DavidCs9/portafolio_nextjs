'use client'
import { getResponse } from '@/services/ia'
import Link from 'next/link'

export default function Home () {
  return (
    <>
      <nav className='bg-black text-white w-full'>
        <ul className='flex justify-center p-4'>
          <li className=' pr-3'>
            <Link href='/'>
              Inicio
            </Link>
          </li>
          <li>
            <Link href='/asistente'>
              Asistente
            </Link>
          </li>
        </ul>
      </nav>
      <div className='bg-black h-screen text-white pt-60'>
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
          >Asistente Inteligente
          </Link>
        </div>
        <button onClick={getResponse}>fetch</button>
      </div>
    </>
  )
}
