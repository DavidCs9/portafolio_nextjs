import { useMessageStore } from '@/app/store/message'
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
    <div
      className='w-full'
    >
      <motion.section
        whileTap={{ scale: 0.98 }}
        className='  rounded-lg p-1 w-11/12 m-auto lg:w-4/6'
      >
        <form
          onSubmit={handleSubmit}
          onKeyDown={handleKeyDown}
          className=' w-full m-auto'
        >
          <div
            className='relative flex flex-col py-3 px-4  flex-grow
           text-white bg-gray-800 rounded-md '
          >
            <textarea
              ref={textAreaRef}
              rows={1}
              tabIndex={0}
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
          </div>
        </form>
      </motion.section>
    </div>
  )
}
