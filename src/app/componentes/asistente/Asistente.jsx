import { Chat } from './Chat'
import { motion } from 'framer-motion'

export function Asistente () {
  return (
    <motion.section
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 1 }}
      className=' text-white p-6 h-[700px]'
      id='asistente'
    >
      <h1 className=' text-center text-3xl pb-5'>ASISTENTE VIRTUAL</h1>
      <h2 className=' text-center text-xl pb-1 text-slate-300'>Pregúntame cualquier duda.</h2>
      <Chat />
    </motion.section>
  )
}
