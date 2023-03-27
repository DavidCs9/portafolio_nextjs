import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Card ({ id, nombre, descripcion, img, url, tecnologias, git }) {
  return (
    <motion.div
      key={id}
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      whileHover={{ scale: 1.05 }}
      whileFocus={{ scale: 1.05 }}
      className=' w-80 lg:relative rounded-md bg-zinc-100 shadow-lg m-10 lg:h-[600px]'
    >
      <Image
        width={500}
        height={500}
        className='rounded-md'
        src={img}
        alt={nombre}
      />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{nombre}</div>
        <p className='text-gray-700 text-base'>
          {descripcion}
        </p>
      </div>
      <div className='flex justify-center gap-4'>
        <button
          type='button' className='py-2 px-4  bg-indigo-600 hover:bg-indigo-700
       focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white
        text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2
        focus:ring-offset-2 rounded-lg'
        >
          <a href={url}>WEBSITE</a>
        </button>
        <button
          type='button' className='py-2 px-4  bg-slate-800 hover:bg-slate-900
       focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white
        text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2
        focus:ring-offset-2 rounded-lg'
        >
          <a href={git}>GITHUB</a>
        </button>
      </div>
      <div className='p-6 lg:absolute lg:bottom-2 '>
        {tecnologias.map((entry, index) => (
          <span key={index} className=' inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2 mb-2'>#{entry}</span>
        ))}
      </div>
    </motion.div>
  )
}
