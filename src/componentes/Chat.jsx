import { useMessageStore } from '@/store/message'
import { ChatForm } from './ChatForm'
import { Message } from './Message'
import { motion, AnimatePresence } from 'framer-motion'
import { DeleteButton } from './Deletebutton'
export function Chat () {
  const messages = useMessageStore(state => state.messages)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5
      }}
      className='flex flex-col h-full flex-1'
    >
      <ChatForm />
      <main id='chat' className=' mt-10]'>
        <AnimatePresence>
          {messages.map((entry, index) => (
            <Message key={entry.id} {...entry} index={index} />
          ))}
        </AnimatePresence>
        <DeleteButton />
      </main>
    </motion.div>

  )
}
