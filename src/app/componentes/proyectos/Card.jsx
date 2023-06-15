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
      className=' w-80 lg:relative rounded-md bg-zinc-100 h-[550px]'
    >
      <Image
        width={500}
        height={500}
        className='rounded-md object-cover w-80 h-80'
        src={img}
        alt={nombre}
      />
      <div className='px-6 py-2 h-28 mb-2'>
        <div className='font-bold text-md text-center'>{nombre}</div>
        <p className='text-gray-900 text-sm pt-1'>
          {descripcion}
        </p>
      </div>
      <div className='flex justify-center gap-4 h-10'>
        <button
          type='button' className='py-2 px-4  bg-indigo-600 hover:bg-indigo-700
       focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white
        text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2
        focus:ring-offset-2 rounded-lg'
        >
          <a href={url}>Website</a>
        </button>
        <button
          type='button' className='py-2 px-4  bg-slate-800 hover:bg-slate-900
       focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white
        text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2
        focus:ring-offset-2 rounded-lg'
        >
          <a href={git}>Github</a>
        </button>
      </div>
      <div className='p-5 flex flex-wrap gap-3 justify-center'>
        {tecnologias.map((entry, index) => (
          <span key={index} className='bg-gray-200 rounded-full text-xs font-semibold text-gray-600 px-3 py-1 cursor-pointer'>#{entry}</span>
        ))}
      </div>
    </motion.div>
  )
}
