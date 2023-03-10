'use client'
// import { SendIcon } from '../../../componentes/SendIcon'
import { getResponse } from '@/services/ia'
import Link from 'next/link'
import { SendIcon } from '../../../componentes/SendIcon'

export default function AsistentePage () {
  const handleClick = async () => {
    const input = document.getElementById('input').value
    console.log(input)
    const promise = getResponse(input)
    const response = await promise
    document.getElementById('response').innerHTML = response
    document.getElementById('input').value = ''
  }
  return (
    <>
      <nav className='bg-black text-white w-full'>
        <ul className='flex justify-center p-4'>
          <li className='pr-3'>
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
      <div className=' bg-black text-white h-screen w-full'>
        <h1 className=' text-center w-full pt-10 text-4xl'>Asistente Inteligente</h1>
        <h3 className=' text-center p-3'>Pregunta cualquier cosa que se podria preguntar en una
          entrevista de trabajo
        </h3>
        <div className=' w-3/4 m-auto flex flex-grow flex-col relative rounded-lg bg-white p-3'>
          <input
            placeholder='Ej Donde estudio David?' id='input' className=' outline-none text-black' cont
          />
          <button onClick={handleClick} className=' bg-white text-black pr-3 absolute bottom-2.5 right-2.5'>
            <SendIcon />
          </button>
        </div>
        <main className=' mt-10'>
          <article className=' w-3/4 bg-gray-500 m-auto p-3 rounded-lg'>
            <p id='response'>Respuesta...</p>
          </article>
        </main>
      </div>
    </>
  )
}
