import Link from 'next/link'

export default function Nav () {
  return (
    <nav className='bg-black text-white w-full'>
      <ul className='flex justify-center'>
        <li>
          <Link href='/'>
            Inicio
          </Link>
        </li>
        <li>
          <Link href='/asistente'>
            Asistente
          </Link>
        </li>
      </ul>
    </nav>

  )
}
