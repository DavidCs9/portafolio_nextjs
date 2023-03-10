'use client'
// import { SendIcon } from '../../../componentes/SendIcon'
import { getResponse } from '@/services/ia'
import Link from 'next/link'

export default function asistentePage () {
  async function handleClick () {
    let promise = null
    const input = document.getElementById('userInput')
    console.log(input.value)
    promise = getResponse(input.value)
    const response = await promise
    const value = response
    document.getElementById('response').innerHTML = value
    promise = null
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
        <form
          className=' w-3/4 m-auto bg-slate-700 rounded-lg shadow-lg'
        >
          <div
            className='relative flex flex-col py-3 px-4 border flex-grow
          border-gray-900/50 text-white bg-gptlightgray rounded-md '
          >
            <textarea
              id='userInput'
              rows={1}
              tabIndex={0}
              autoFocus
              defaultValue=''
              placeholder='Ejem: Porque estudiaste tu carrera?'
              className='h-[24px] resize-none bg-transparent border-0 outline-none'
            />
            <button
              className='absolute p-1 rounded-md bottom-2.5 right-2.5'
              onClick={handleClick}
            >Ask
            </button>
          </div>
        </form>

        <main className=' mt-10'>
          <article className=' w-3/4 bg-gray-500 m-auto p-3 rounded-lg'>
            <p id='response'>Respuesta...</p>
          </article>

        </main>
      </div>
    </>
  )
}
