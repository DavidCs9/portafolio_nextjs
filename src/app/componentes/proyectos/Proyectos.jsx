import { motion } from 'framer-motion'
import Card from './Card'
import { proyectos } from './proyectos'

export function Proyectos () {
  return (
    <section
      className='mb-40'
      id='proyectos'
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 1 }}
        className='text-white text-4xl p-20 font-bold text-center'
      >PROYECTOS
      </motion.h1>
      <div className=' md:flex justify-center grid'>
        {proyectos.map((entry, index) => (
          <Card key={index} {...entry} />
        ))}
      </div>
    </section>
  )
}
