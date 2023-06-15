import { useMessageStore } from '@/app/store/message'
import { motion } from 'framer-motion'

export function DeleteButton () {
  const deleteMessages = useMessageStore(state => state.deleteMessages)
  const handleDeleteChat = (event) => {
    deleteMessages()
    event.preventDefault()
  }
  return (
    <div className='w-full flex justify-center mb-6 mt-4'>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleDeleteChat} className=' bg-gray-900 flex items-center px-6 py-2  transition ease-in duration-200 uppercase rounded-full
       hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none'
      >
        <i className='fa-regular fa-trash-can pr-3' />
        Restart Chat
      </motion.button>
    </div>
  )
}
