'use client'
import { getResponse } from '@/app/services/ia'
import { SendIcon } from './SendIcon'

export default function UserInput () {
  async function handleClick (event) {
    let promise = null
    const input = document.getElementById('userInput')
    promise = getResponse(input.value)
    const response = await promise
    const value = response
    document.getElementById('response').innerHTML = value
    promise = null
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleClick(e)
    }
  }
  return (
    <form className='form'>
      onSubmit={handleClick}
      onKeyDown={handleKeyDown}
      <div className=' relative'>
        <label for='name-with-label' className=''>
          Pregunta
        </label>
        <div className='input'>
          <textarea
            rows={1}
            type='text' id='name-with-label' className=' rounded-lg
         border-transparent flex-1 appearance-none border
          border-gray-300 w-full py-2 px-4 bg-white
           text-gray-700 placeholder-gray-400 shadow-sm
           text-base focus:outline-none focus:ring-2 focus:ring-purple-600
           focus:border-transparent resize-none' placeholder='Ejem: Donde estudio David?'
          />
          <button
            className='absolute p-2 rounded-md bottom-2.5 right-2.5 pr-3'
          >
            <SendIcon />
          </button>
        </div>
      </div>
    </form>
  )
}
