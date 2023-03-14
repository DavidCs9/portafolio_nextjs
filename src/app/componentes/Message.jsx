import { IaAvatar } from './IsAvatar'
import { UserAvatar } from './UserAvatar'
import { TypingEffect } from './TypingEffect'
import { Loading } from './Loading'
import { motion } from 'framer-motion'

export function Message ({ ia, message, loading, index }) {
  const avatar = ia ? <UserAvatar /> : <IaAvatar />

  const list = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      x: -1000,
      transition: {
        when: 'afterChildren'
      }
    },
    visible: ({ delay }) => ({
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay
      }
    }),
    exit: ({ delay }) => ({
      opacity: 0,
      scale: 0.5,
      transition: {
        duration: 0.1,
        delay
      }
    })
  }

  return (

    <motion.div
      custom={{ delay: (index + 1) * 0.2 }}
      initial='hidden'
      animate='visible'
      exit='exit'
      variants={list}
    >
      <article className='flex gap-3 pb-1 p-6 m-auto max-w-3xl text-gray-100 w-full '>
        <figure className={`${ia ? ' bg-secundary' : '  bg-third'} w-8 h-8 flex items-center justify-center rounded-md`}>
          {avatar}
        </figure>
        <div className=' flex-1'>
          <p className={`${ia ? ' bg-secundary' : ' bg-third'} rounded-md p-4`}>
            {loading ? <Loading /> : <TypingEffect text={message} />}
          </p>
        </div>
      </article>
    </motion.div>
  )
}
