'use client'
import { getResponse } from '@/app/services/ia'

export default function Button () {
  async function handleClick (event) {
    let promise = null
    const input = document.getElementById('userInput')
    promise = getResponse(input.value)
    const response = await promise
    const value = response
    document.getElementById('response').innerHTML = value
    promise = null
  }

  return (
    <div className='w-10 text-center'>
      <button
        onClick={handleClick}
        type='button'
        className='py-2 px-4  bg-indigo-600 hover:bg-indigo-700
     focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white
      transition ease-in duration-200 text-center text-base font-semibold shadow-md
       focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
      >
        Preguntar
      </button>
    </div>
  )
}
