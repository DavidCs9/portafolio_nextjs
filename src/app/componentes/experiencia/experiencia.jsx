import { motion } from 'framer-motion'

export function Experiencia () {
  return (
    <motion.section
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 1 }}
      className=' h-96 p-3 lg:w-[800px] m-auto'
    >
      <h1 className=' text-3xl text-white text-center'>EXPERIENCIA</h1>
      <div className=' text-white pt-6 text-left'>
        <p className=' text-2xl text-center text-slate-400'>
          Interceramic
        </p>
        <p className=' text-2xl text-center text-cyan-200'>
          Desarrollador de software
        </p>
        <p className=' ml-8 text-md pt-4 lg:text-center lg:text-2xl'>Responsabilidades</p>
        <motion.ul
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, delay: 1.5 }}
          className=' list-disc text-sm w-9/12 mx-auto pt-1 lg:text-xl lg:pt-2'
        >
          <motion.li>Apoyo requerimientos en ORACLE Forms y Reports
          </motion.li>
          <motion.li>Apoyo en creacion y mantenimiento de servicios web
          </motion.li>
          <motion.li>Investigacion para mejoras en procesos enfocados en TI
          </motion.li>
        </motion.ul>
      </div>

    </motion.section>
  )
}
