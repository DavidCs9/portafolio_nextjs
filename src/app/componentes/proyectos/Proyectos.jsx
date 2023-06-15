import { motion } from 'framer-motion'
import Card from './Card'
import { proyecto } from './proyecto'

export function Proyectos () {
  return (
    <section
      className='mb-40 flex flex-col items-center justify-center w-full'
      id='proyectos'
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 1 }}
        className='text-white text-4xl p-20 font-bold text-center'
      >
        Proyectos
      </motion.h1>
      <div className='flex flex-wrap gap-20 justify-center'>
        {proyecto.map((entry, index) => (
          <Card key={index} {...entry} />
        ))}
      </div>
    </section>
  )
}
