'use client'

import { Chat } from '../componentes/Chat'
import Nav from '../componentes/Nav'

export default function AsistentePage () {
  return (
    <>
      <Nav />
      <div className=' text-white p-5'>
        <h1 className=' text-center text-3xl pb-3'>David Virtual</h1>
        <h2 className=' text-center text-xl pb-7'>Preguntame cualquier cosa que me preguntarias en un entrevista</h2>
        <Chat />
      </div>
    </>
  )
}
