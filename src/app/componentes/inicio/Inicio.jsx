import { motion } from 'framer-motion'
import Image from 'next/image'

export function Inicio () {
  return (
    <section
      className='text-white pt-56 h-screen text-center p-3'
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}

      >
        <h1 className=' text-4xl lg:text-5xl font-bold'>DAVID CASTRO</h1>
        <h2 className=' text-2xl pt-2 lg:text-4xl text-slate-400'>SOFTWARE DEVELOPER</h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, type: 'spring', stiffness: 100 }}
        viewport={{ once: false }}
        whileHover={{
          scale: 1.05,
          rotate: [0, -10, 10, 0],
          transition: { duration: 0.4, type: 'spring', stiffness: 80 }
        }}
        whileTap={{
          scale: 1.05,
          rotate: [0, -10, 10, 0],
          transition: { duration: 0.4, type: 'spring', stiffness: 80 }
        }}
        className='flex justify-center pt-9'
      >
        <Image
          src='/robot.svg'
          alt='David Castro'
          width={200}
          height={200}
        />
      </motion.div>
    </section>
  )
}
