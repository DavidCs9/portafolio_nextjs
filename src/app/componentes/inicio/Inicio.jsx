import { motion } from 'framer-motion'

export function Inicio () {
  return (
    <section
      className='text-white pt-72 h-screen text-center p-3'
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}

      >
        <h1 className=' text-4xl lg:text-5xl font-bold'>DAVID CASTRO</h1>
        <h2 className=' text-2xl pt-2 lg:text-4xl text-secundary'>SOFTWARE DEVELOPER</h2>
      </motion.div>
    </section>
  )
}
