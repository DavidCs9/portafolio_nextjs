import Link from 'next/link'

export default function Nav () {
  return (
    <nav className=' text-white w-full'>
      <ul className='flex justify-center p-4'>
        <li className=' pr-3'>
          <Link href='/'>
            Inicio
          </Link>
        </li>
        <li>
          <Link className='pr-3' href='/asistente'>
            Asistente
          </Link>
        </li>
        <li>
          <Link href='/proyectos'>
            Proyectos
          </Link>
        </li>
      </ul>
    </nav>

  )
}
