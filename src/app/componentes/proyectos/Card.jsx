import Image from 'next/image'

export default function Card () {
  return (
    <div className='max-w-sm rounded-md bg-zinc-100 shadow-lg'>
      <Image
        width={500}
        height={500}
        className='w-full rounded-md'
        src='https://user-images.githubusercontent.com/105255351/219976584-e6b907d7-6394-430d-8d2f-8b2574cd743b.svg'
        alt='Sunset in the mountains'
      />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>CastroBot</div>
        <p className='text-gray-700 text-base'>
          CastroBot is a web application that allow users to chat with an intelligent virutal assistan built with Nextjs.
        </p>
      </div>
      <div className='px-6 pt-4 pb-2'>
        <span className='inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#Nextjs</span>
        <span className='inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#React</span>
        <span className='inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#Tailwindcss</span>
      </div>
    </div>
  )
}
