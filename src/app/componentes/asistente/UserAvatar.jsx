import Image from 'next/image'

export function UserAvatar () {
  return (
    <Image
      className=' rounded-md bg-black'
      alt='foto de david'
      src='/fotoperfil.jpg'
      width={200}
      height={200}
    />
  )
}
