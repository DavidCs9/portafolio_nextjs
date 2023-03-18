import { motion } from 'framer-motion'
import Card from './Card'

export function Proyectos () {
  return (
    <section
      className=' h-screen'
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <h1 className='text-white text-4xl pt-10 font-bold text-center'>PROYECTOS</h1>
        <div className='flex justify-center pt-12'>
          <Card />
        </div>
      </motion.div>
    </section>
  )
}
