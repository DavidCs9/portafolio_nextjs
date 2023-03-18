import { Chat } from './Chat'
import { motion } from 'framer-motion'

export function Asistente () {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 1 }}
      className=' text-white p-5 h-screen'
    >
      <h1 className=' text-center text-3xl pb-3'>ASISTENTE VIRTUAL</h1>
      <h2 className=' text-center text-xl pb-7'>Pregúntame cualquier cosa que me preguntarías en una entrevista.</h2>
      <Chat />
    </motion.section>
  )
}
