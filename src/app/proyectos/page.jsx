import { LoadingProj } from '../componentes/loadingProj'
import Nav from '../componentes/Nav'

export default function ProyectosPage () {
  return (
    <>
      <Nav />
      <div className='h-screen '>
        <h1 className='text-white text-5xl font-bold mt-10 mb-10 text-center'>Proyectos en proceso...</h1>
        <div className='flex justify-center pt-12'>
          <LoadingProj />
        </div>
      </div>
    </>
  )
}
