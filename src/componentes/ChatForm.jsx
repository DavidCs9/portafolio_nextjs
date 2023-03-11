import { useMessageStore } from '@/store/message'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { SendIcon } from './SendIcon'

export function ChatForm () {
  const sendPrompt = useMessageStore(state => state.sendPrompt)
  const textAreaRef = useRef()
  const messages = useMessageStore(state => state.messages)

  const handleSubmit = (event) => {
    let prompts = ''
    messages.map((entry) => (
      prompts += entry.message
    ))

    prompts += textAreaRef.current.value
    event.preventDefault()
    sendPrompt({ prompt: prompts, userPrompt: textAreaRef.current.value })
    textAreaRef.current.value = ''
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <motion.div
      className='w-full bg-black'
    >
      <h1 className=' text-center text-3xl pb-3'>David Virtual</h1>
      <h2 className=' text-center text-xl pb-7'>Preguntame cualquier cosa que me preguntarias en un entrevista real...</h2>
      <section className=' bg-neutral-900 border-neutral-600 border-2 rounded-lg p-1 w-3/4 m-auto'>
        <form
          onSubmit={handleSubmit}
          onKeyDown={handleKeyDown}
          className=' w-full m-auto'
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className='relative flex flex-col py-3 px-4 border flex-grow
          border-gray-900/50 text-white bg-gptlightgray rounded-md '
          >
            <textarea
              ref={textAreaRef}
              rows={1}
              tabIndex={0}
              autoFocus
              defaultValue=''
              placeholder='Ej. Donde estudiaste?'
              className='h-[24px] resize-none bg-transparent border-0 outline-none'
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='absolute p-1 rounded-md bottom-2.5 right-2.5'
            >
              <SendIcon />
            </motion.button>
          </motion.div>
        </form>
      </section>
    </motion.div>
  )
}
