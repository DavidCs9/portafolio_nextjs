import { motion } from 'framer-motion'
import Card from './Card'
import { proyectos } from './proyectos'

export function Proyectos () {
  return (
    <section
      className='mb-40'
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 1 }}
        className='text-white text-4xl pt-10 font-bold text-center'
      >PROYECTOS
      </motion.h1>
      <div className='grid justify-center pt-12 gap-10'>
        {proyectos.map((entry, index) => (
          <Card key={index} {...entry} />
        ))}
      </div>
    </section>
  )
}
